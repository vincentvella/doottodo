import { styled } from 'nativewind';
import {
  View as RNView,
  Text as RNText,
  SafeAreaView as RNSafeAreaView,
  Image as RNImage,
} from 'react-native';

export const Image = styled(RNImage);
export const SafeAreaView = styled(RNSafeAreaView);
export const Text = styled(RNText, 'font-sans');
export const View = styled(RNView);
