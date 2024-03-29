import { styled } from 'nativewind';
import {
  View as RNView,
  Text as RNText,
  SafeAreaView as RNSafeAreaView,
  Image as RNImage,
  TextInput as RNTextInput,
  TouchableOpacity as RNTouchableOpacity,
  FlatList as RNFlatList,
} from 'react-native';
import { H1 as EH1, H3 as EH3 } from '@expo/html-elements';
import Animated from 'react-native-reanimated';
import { custom } from './utils/custom-styled-hoc';
import { PressableOpacity as NativePressableOpacity } from 'react-native-pressable-opacity';

export const Image = styled(RNImage);
export const SafeAreaView = styled(RNSafeAreaView);
export const TouchableOpacity = styled(RNTouchableOpacity);
export const PressableOpacity = styled(NativePressableOpacity);
export const View = styled(RNView);
export function FlatList<T>() {
  return styled(RNFlatList<T>);
}

// Text bindings
export const Text = custom(styled(RNText, 'text-neutral-900 dark:text-neutral-100'));
export const AnimatedText = custom(styled(Animated.Text, 'text-neutral-900 dark:text-neutral-100'));
export const TextInput = custom(styled(RNTextInput, 'text-neutral-900 dark:text-neutral-100'));
export const H1 = custom(styled(EH1, 'text-neutral-900 dark:text-neutral-100 my-2'));
export const H3 = custom(styled(EH3, 'text-neutral-900 dark:text-neutral-100'));
