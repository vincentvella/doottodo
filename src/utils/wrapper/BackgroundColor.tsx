import React from 'react';
import { BackgroundColor as EBGColor } from '@bacons/expo-background-color';
import colors from 'tailwindcss/colors';

const BackgroundColor = () => (
  <EBGColor color={{ light: colors.neutral[200], dark: colors.neutral[900] }} />
);

export default BackgroundColor;