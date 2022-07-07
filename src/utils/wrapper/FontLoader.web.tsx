import * as React from 'react';
import { FontDisplay, loadAsync } from 'expo-font';

const fontName = 'Metropolis';

const FontLoader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    loadAsync({
      [`${fontName}-Black`]: { uri: `/fonts/Metropolis-Black.otf`, display: FontDisplay.SWAP },
      [`${fontName}-BlackItalic`]: {
        uri: `/fonts/Metropolis-BlackItalic.otf`,
        display: FontDisplay.SWAP,
      },
      [`${fontName}-Bold`]: { uri: `/fonts/Metropolis-Bold.otf`, display: FontDisplay.SWAP },
      [`${fontName}-BoldItalic`]: {
        uri: `/fonts/Metropolis-BoldItalic.otf`,
        display: FontDisplay.SWAP,
      },
      [`${fontName}-ExtraBold`]: {
        uri: `/fonts/Metropolis-ExtraBold.otf`,
        display: FontDisplay.SWAP,
      },
      [`${fontName}-ExtraBoldItalic`]: {
        uri: `/fonts/Metropolis-ExtraBoldItalic.otf`,
        display: FontDisplay.SWAP,
      },
      [`${fontName}-ExtraLight`]: {
        uri: `/fonts/Metropolis-ExtraLight.otf`,
        display: FontDisplay.SWAP,
      },
      [`${fontName}-ExtraLightItalic`]: {
        uri: `/fonts/Metropolis-ExtraLightItalic.otf`,
        display: FontDisplay.SWAP,
      },
      [`${fontName}-Light`]: { uri: `/fonts/Metropolis-Light.otf`, display: FontDisplay.SWAP },
      [`${fontName}-LightItalic`]: {
        uri: `/fonts/Metropolis-LightItalic.otf`,
        display: FontDisplay.SWAP,
      },
      [`${fontName}-Medium`]: { uri: `/fonts/Metropolis-Medium.otf`, display: FontDisplay.SWAP },
      [`${fontName}-MediumItalic`]: {
        uri: `/fonts/Metropolis-MediumItalic.otf`,
        display: FontDisplay.SWAP,
      },
      [`${fontName}-Regular`]: { uri: `/fonts/Metropolis-Regular.otf`, display: FontDisplay.SWAP },
      [`${fontName}-RegularItalic`]: {
        uri: `/fonts/Metropolis-RegularItalic.otf`,
        display: FontDisplay.SWAP,
      },
      [`${fontName}-SemiBold`]: {
        uri: `/fonts/Metropolis-SemiBold.otf`,
        display: FontDisplay.SWAP,
      },
      [`${fontName}-SemiBoldItalic`]: {
        uri: `/fonts/Metropolis-SemiBoldItalic.otf`,
        display: FontDisplay.SWAP,
      },
      [`${fontName}-Thin`]: { uri: `/fonts/Metropolis-Thin.otf`, display: FontDisplay.SWAP },
      [`${fontName}-ThinItalic`]: {
        uri: `/fonts/Metropolis-ThinItalic.otf`,
        display: FontDisplay.SWAP,
      },
    });
  }, []);

  return <>{children}</>;
};

export default FontLoader;
