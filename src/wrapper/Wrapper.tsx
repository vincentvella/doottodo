import * as React from 'react';
import { StatusBar, useColorScheme, ColorSchemeName, StatusBarStyle } from 'react-native';
import { View } from '~/react-native';
import FontLoader from './FontLoader';
import Supabase, { UserProvider } from '~/services/supabase';

const getStatusBar = (scheme: ColorSchemeName): StatusBarStyle =>
  scheme === 'dark' ? 'dark-content' : 'light-content';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scheme = useColorScheme();
  return (
    <FontLoader>
      <UserProvider supabaseClient={Supabase}>
        <StatusBar barStyle={getStatusBar(scheme)} />
        <View className="h-full overflow-hidden bg-light dark:bg-dark">
          <>{children}</>
        </View>
      </UserProvider>
    </FontLoader>
  );
};

export default Wrapper;
