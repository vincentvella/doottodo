import * as React from 'react';
import {
  NavigationContainer,
  Theme,
  DefaultTheme,
  useNavigationContainerRef,
} from '@react-navigation/native';
import Authenticated, {
  AuthenticatedTabsParams,
  linkingConfig as authenticatedLinkingConfig,
} from './authenticated';
import UnAuthenticated, {
  linkingConfig as unauthenticatedLinkingConfig,
  UnauthenticatedStackParams,
} from './unauthenticated';
import * as Linking from 'expo-linking';
import { useUser } from '~/services/supabase';
import useElementColor from '~/hooks/useElementColor';
import { RouteConfig } from './types';

const url = 'doottodo.com';

const prefixes = [
  Linking.createURL('/'),
  // https, including subdomains like www.
  `https://${url}/`,
  `https://*.${url}/`,
  // http, including subdomains like www.
  `http://${url}/`,
  `http://*.${url}/`,
];

const mapDripsyThemeToReactNavigation = ({ colors }: Partial<Theme>): Theme => ({
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
    background: colors?.background || DefaultTheme.colors.background,
  },
});

const Navigator = () => {
  const { user, isLoading } = useUser();
  const color = useElementColor(true);
  const theme: Partial<Theme> = React.useMemo(
    () => ({
      colors: {
        ...DefaultTheme.colors,
        background: color,
        border: 'black',
      },
    }),
    [color],
  );
  return (
    <NavigationContainer
      fallback={null}
      linking={{
        prefixes,
        config: (user ? authenticatedLinkingConfig : unauthenticatedLinkingConfig) as RouteConfig<
          AuthenticatedTabsParams | UnauthenticatedStackParams
        >,
      }}
      theme={mapDripsyThemeToReactNavigation(theme)}
    >
      {!isLoading && (!!user ? <Authenticated /> : <UnAuthenticated />)}
    </NavigationContainer>
  );
};

export default Navigator;
