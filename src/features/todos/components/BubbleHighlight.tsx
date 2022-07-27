import React from 'react';
import { View } from '~/react-native';

const BubbleHighlight: React.FC<{ children: React.ReactNode; visible: boolean }> = ({
  children,
  visible,
}) =>
  visible ? (
    <View className="opacity-90 bg-accent rounded mx-2">{children}</View>
  ) : (
    <View className="opacity-90 bg-neutral-300 dark:bg-neutral-600 rounded mx-2">{children}</View>
  );

export default BubbleHighlight;
