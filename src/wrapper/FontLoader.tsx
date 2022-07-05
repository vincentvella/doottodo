import * as React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Platform } from 'react-native';

const fontName = 'Metropolis';

const FontLoader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loaded, error] = useFonts({
    [fontName]: require(`../../public/fonts/Metropolis-Regular.otf`),
  });

  React.useEffect(() => {
    if (!loaded && Platform.OS !== 'web') {
      SplashScreen.preventAutoHideAsync();
    }
  }, [loaded]);

  React.useEffect(() => {
    if (loaded && Platform.OS !== 'web') {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  React.useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  if (!loaded && Platform.OS !== 'web') return null;

  return <>{children}</>;
};

export default FontLoader;
