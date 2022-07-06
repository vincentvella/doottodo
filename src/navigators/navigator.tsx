import * as React from 'react';
import { NavigationContainer, Theme, DefaultTheme } from '@react-navigation/native';
import Authenticated from './authenticated';
import UnAuthenticated, { linkingConfig as unauthenticatedLinkingConfig } from './unauthenticated';
import { useUser } from '~/services/supabase';
import { useColorScheme } from 'nativewind';

const { colors } = require('~/theme');

const prefixes = ['doottodo://'];

const mapDripsyThemeToReactNavigation = ({ colors }: Partial<Theme>): Theme => ({
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors?.background || DefaultTheme.colors.background,
  },
});

const Navigator = () => {
  const { user } = useUser();
  const { colorScheme } = useColorScheme();
  const theme: Partial<Theme> = React.useMemo(
    () => ({
      colors: {
        ...DefaultTheme.colors,
        background: colorScheme === 'light' ? colors.light : colors.dark,
      },
    }),
    [colorScheme],
  );
  return (
    <NavigationContainer
      linking={{ prefixes, config: user ? { screens: {} } : unauthenticatedLinkingConfig }}
      theme={mapDripsyThemeToReactNavigation(theme)}
    >
      {!!user ? <Authenticated /> : <UnAuthenticated />}
    </NavigationContainer>
  );
};

export default Navigator;
