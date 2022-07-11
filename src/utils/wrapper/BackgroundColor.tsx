import React from 'react';
import { BackgroundColor as EBGColor } from '@bacons/expo-background-color';
import { colors } from '~/theme';

const BackgroundColor = () => <EBGColor color={{ light: colors.light, dark: colors.dark }} />;

export default BackgroundColor;
