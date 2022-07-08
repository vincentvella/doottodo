import React from 'react';
import { Platform } from 'react-native';
import { BackgroundColor as EBGColor } from '@bacons/expo-background-color';

const { colors } = require('~/theme');

const BackgroundColor = () => {
  if (Platform.OS === 'web') {
    return null;
  }
  return <EBGColor color={{ light: colors.light, dark: colors.dark }} />;
};

export default BackgroundColor;