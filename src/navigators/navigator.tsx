import * as React from 'react';
import { NavigationContainer, Theme, DefaultTheme } from '@react-navigation/native';
import Authenticated from './authenticated';
import UnAuthenticated, { linkingConfig as unauthenticatedLinkingConfig } from './unauthenticated';
import { useUser } from '~/services/supabase';
import useElementColor from '~/hooks/useElementColor';

const prefixes = ['doottodo://'];

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
      linking={{ prefixes, config: user ? { screens: {} } : unauthenticatedLinkingConfig }}
      theme={mapDripsyThemeToReactNavigation(theme)}
    >
      {!isLoading && (!!user ? <Authenticated /> : <UnAuthenticated />)}
    </NavigationContainer>
  );
};

export default Navigator;
