import { OpaqueColorValue, Platform, PlatformColor as RNPlatformColor } from 'react-native';
import { colors } from '~/theme';
import noop from './noop';

const PlatformColor = (Platform.OS === 'web' ? noop : RNPlatformColor) as (
  color: string,
) => OpaqueColorValue;

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
