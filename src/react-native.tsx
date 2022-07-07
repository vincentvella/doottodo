import React from 'react';
import { styled, StyledProps } from 'nativewind';
import {
  View as RNView,
  Text as RNText,
  SafeAreaView as RNSafeAreaView,
  Image as RNImage,
  TextInput as RNTextInput,
  TextProps,
} from 'react-native';
import Animated from 'react-native-reanimated';

export const Image = styled(RNImage);
export const SafeAreaView = styled(RNSafeAreaView);
const TWText = styled(RNText, 'text-dark dark:text-light');
const decorationMap = {
  thin: 'font-metropolis-thin',
  extralight: 'font-metropolis-x-lgt',
  light: 'font-metropolis-lgt',
  normal: 'font-metropolis',
  medium: 'font-metropolis-med',
  semibold: 'font-metropolis-semi-bld',
  bold: 'font-metropolis-bld',
  extrabold: 'font-metropolis-x-bld',
  black: 'font-metropolis-blk',
};
const decorators = Object.keys(decorationMap) as (keyof typeof decorationMap)[];
export const Text: React.FC<
  StyledProps<TextProps> & { decoration?: keyof typeof decorationMap }
> = ({ decoration, className, ...props }) => {
  const weight = React.useMemo(() => {
    const fontModifiers = className?.split(' ').reduce((acc, a) => {
      const att = a.trim();
      if (att.startsWith('font-')) {
        acc.push(att.replace('font-', ''));
      }
      return acc;
    }, [] as string[]) as typeof decorators | undefined;
    const modifier = fontModifiers?.find((a) => decorators.includes(a));
    let weight = decorationMap[modifier || decoration || 'normal'];
    if (className?.includes('italic')) {
      return weight + '-it';
    }
    return weight;
  }, [className, decoration]);
  const name = React.useMemo(() => [className, weight].join(' '), [className, weight]);
  return <TWText {...props} className={name} />;
};
export const AnimatedText = styled(Animated.Text, 'text-dark dark:text-light');
export const TextInput = styled(RNTextInput, 'text-dark dark:text-light');
export const View = styled(RNView);
