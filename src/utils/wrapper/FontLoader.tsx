import * as React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Platform } from 'react-native';

const fontName = 'Metropolis';

const FontLoader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loaded, error] = useFonts({
    [`${fontName}-Black`]: require(`../../../public/fonts/Metropolis-Black.otf`),
    [`${fontName}-BlackItalic`]: require(`../../../public/fonts/Metropolis-BlackItalic.otf`),
    [`${fontName}-Bold`]: require(`../../../public/fonts/Metropolis-Bold.otf`),
    [`${fontName}-BoldItalic`]: require(`../../../public/fonts/Metropolis-BoldItalic.otf`),
    [`${fontName}-ExtraBold`]: require(`../../../public/fonts/Metropolis-ExtraBold.otf`),
    [`${fontName}-ExtraBoldItalic`]: require(`../../../public/fonts/Metropolis-ExtraBoldItalic.otf`),
    [`${fontName}-ExtraLight`]: require(`../../../public/fonts/Metropolis-ExtraLight.otf`),
    [`${fontName}-ExtraLightItalic`]: require(`../../../public/fonts/Metropolis-ExtraLightItalic.otf`),
    [`${fontName}-Light`]: require(`../../../public/fonts/Metropolis-Light.otf`),
    [`${fontName}-LightItalic`]: require(`../../../public/fonts/Metropolis-LightItalic.otf`),
    [`${fontName}-Medium`]: require(`../../../public/fonts/Metropolis-Medium.otf`),
    [`${fontName}-MediumItalic`]: require(`../../../public/fonts/Metropolis-MediumItalic.otf`),
    [`${fontName}-Regular`]: require(`../../../public/fonts/Metropolis-Regular.otf`),
    [`${fontName}-RegularItalic`]: require(`../../../public/fonts/Metropolis-RegularItalic.otf`),
    [`${fontName}-SemiBold`]: require(`../../../public/fonts/Metropolis-SemiBold.otf`),
    [`${fontName}-SemiBoldItalic`]: require(`../../../public/fonts/Metropolis-SemiBoldItalic.otf`),
    [`${fontName}-Thin`]: require(`../../../public/fonts/Metropolis-Thin.otf`),
    [`${fontName}-ThinItalic`]: require(`../../../public/fonts/Metropolis-ThinItalic.otf`),
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
