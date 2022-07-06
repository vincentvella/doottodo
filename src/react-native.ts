import { styled } from 'nativewind';
import {
  View as RNView,
  Text as RNText,
  SafeAreaView as RNSafeAreaView,
  Image as RNImage,
  TextInput as RNTextInput,
} from 'react-native';
import Animated from 'react-native-reanimated';

export const Image = styled(RNImage);
export const SafeAreaView = styled(RNSafeAreaView);
export const Text = styled(RNText, 'font-sans text-dark dark:text-light');
export const AnimatedText = styled(Animated.Text, 'font-sans text-dark dark:text-light');
export const TextInput = styled(RNTextInput, 'font-sans text-dark dark:text-light');
export const View = styled(RNView);
