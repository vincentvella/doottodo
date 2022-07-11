import { OpaqueColorValue, Platform, PlatformColor } from 'react-native';
import { colors } from '~/theme';

export const platformColor = (color: string) => {
  const colorRef = colors[color];
  if (typeof colorRef === 'string') {
    return colorRef;
  }
  return Platform.select<OpaqueColorValue | string>({
    ios: PlatformColor(colorRef?.ios || color),
    android: PlatformColor(colorRef?.android || color),
    default: colorRef?.default || color,
  });
};
