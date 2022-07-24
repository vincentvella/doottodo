import * as React from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { StatusBar, useColorScheme, ColorSchemeName, StatusBarStyle } from 'react-native';
import { View } from '~/react-native';
import FontLoader from './FontLoader';
import Supabase, { UserProvider } from '~/services/supabase';
import StyleLoader from './StyleLoader';
import BackgroundColor from './BackgroundColor';

const getStatusBar = (scheme: ColorSchemeName): StatusBarStyle =>
  scheme === 'dark' ? 'dark-content' : 'light-content';

const queryClient = new QueryClient();

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scheme = useColorScheme();
  return (
    <StyleLoader>
      <FontLoader>
        <UserProvider supabaseClient={Supabase}>
          <BackgroundColor />
          <StatusBar barStyle={getStatusBar(scheme)} />
          <View className="h-full overflow-hidden bg-light dark:bg-dark">
            <QueryClientProvider client={queryClient}>
              <>{children}</>
            </QueryClientProvider>
          </View>
        </UserProvider>
      </FontLoader>
    </StyleLoader>
  );
};

export default Wrapper;
