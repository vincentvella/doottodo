import * as React from 'react';
import { AppState, AppStateStatus, NativeEventSubscription, Platform } from 'react-native'
import { SupabaseClient, User } from '@supabase/supabase-js';

export type UserFetcher = (url: string) => Promise<{
  user: User | null;
  accessToken: string | null;
  error?: string | null;
}>;

export type UserState = {
  user: User | null;
  accessToken: string | null;
  error?: Error;
  isLoading: boolean;
  checkSession: () => Promise<void>;
};

export const TOKEN_REFRESH_MARGIN = 10; // in seconds
export const RETRY_INTERVAL = 2; // in hundred ms (initial retry after 200ms with exponential backoff)
export const MAX_RETRIES = 10;

let networkRetries = 0;
let refreshTokenTimer: ReturnType<typeof setTimeout>;

export const UserContext = React.createContext<UserState | undefined>(undefined);

const handleError = async (error: any) => {
  if (typeof error.json !== 'function') {
    return String(error);
  }
  const err = await error.json();
  return {
    message:
      err.msg ||
      err.message ||
      err.error_description ||
      err.error ||
      JSON.stringify(err),
    status: error?.status || 500
  };
};

const userFetcher: UserFetcher = async (url) => {
  const response = await fetch(url).catch(() => undefined);
  if (!response)
    return { user: null, accessToken: null, error: 'Request failed' };
  return response.ok
    ? response.json()
    : { user: null, accessToken: null, error: await handleError(response) };
};

export interface Props {
  supabaseClient: SupabaseClient;
  callbackUrl?: string;
  profileUrl?: string;
  user?: User;
  fetcher?: UserFetcher;
  autoRefreshToken?: boolean;
  [propName: string]: any;
}

const host = Platform.OS === 'web' ? '' : process.env.HOST
const CALLBACK_URL = `${host}/api/auth/callback`
const PROFILE_URL = `${host}/api/auth/user`

export const UserProvider = (props: Props) => {
  const {
    supabaseClient,
    callbackUrl = CALLBACK_URL,
    profileUrl = PROFILE_URL,
    user: initialUser = null,
    fetcher = userFetcher,
    autoRefreshToken = true
  } = props;
  const [user, setUser] = React.useState<User | null>(initialUser);
  const [accessToken, setAccessToken] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(!initialUser);
  const [error, setError] = React.useState<Error>();

  const checkSession = React.useCallback(async (): Promise<void> => {
    try {
      networkRetries++;
      const { user, accessToken, error } = await fetcher(profileUrl);
      if (error) {
        if (error === 'Request failed' && networkRetries < MAX_RETRIES) {
          if (refreshTokenTimer) clearTimeout(refreshTokenTimer);
          refreshTokenTimer = setTimeout(
            checkSession,
            RETRY_INTERVAL ** networkRetries * 100 // exponential backoff
          );
          return;
        }
        console.error(error);
        setError(new Error(error));
      }
      networkRetries = 0;
      if (accessToken) {
        supabaseClient.auth.setAuth(accessToken);
        setAccessToken(accessToken);
      }
      setUser(user);
      // Set up auto token refresh
      if (autoRefreshToken) {
        const expiresAt = (user as any).exp;
        let timeout = 20 * 1000;
        if (expiresAt) {
          const timeNow = Math.round(Date.now() / 1000);
          const expiresIn = expiresAt - timeNow;
          const refreshDurationBeforeExpires =
            expiresIn > TOKEN_REFRESH_MARGIN ? TOKEN_REFRESH_MARGIN : 0.5;
          timeout = (expiresIn - refreshDurationBeforeExpires) * 1000;
        }
        setTimeout(checkSession, timeout);
      }
      if (!user) setIsLoading(false);
    } catch (_e) {
      const error = new Error(`The request to ${profileUrl} failed`);
      setError(error);
    }
  }, [autoRefreshToken, fetcher, profileUrl, supabaseClient.auth]);

  const handleVisibilityChange = async (nextAppState: AppStateStatus) => {
    if (nextAppState === 'active') {
      setIsLoading(true);
      await checkSession();
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    handleVisibilityChange('active');
    let subscription: NativeEventSubscription
    if (autoRefreshToken) {
      subscription = AppState.addEventListener('change', handleVisibilityChange)
    }
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'TOKEN_REFRESHED') return; // ignore this as we're refreshing tokens server-side.
        setIsLoading(true);
        // Forward session from client to server where it is set in a Cookie.
        // NOTE: this will eventually be removed when the Cookie can be set differently.
        await fetch(callbackUrl, {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          credentials: 'same-origin',
          body: JSON.stringify({ event, session })
        }).then((res) => {
          if (!res.ok) {
            const error = new Error(`The request to ${callbackUrl} failed`);
            setError(error);
          }
        });
        // Fetch the user from the API route
        await checkSession();
        setIsLoading(false);
      }
    );

    return () => {
      subscription?.remove()
      authListener?.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    isLoading,
    user,
    accessToken,
    error,
    checkSession
  };
  return <UserContext.Provider value={value} {...props} />;
};