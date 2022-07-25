import React from 'react';
import { View } from '~/react-native';

const BubbleHighlight: React.FC<{ children: React.ReactNode; visible: boolean }> = ({
  children,
  visible,
}) =>
  visible ? <View className="opacity-90 bg-accent rounded">{children}</View> : <>{children}</>;

export default BubbleHighlight;
