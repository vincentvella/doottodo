import React from 'react';
import { useColorScheme } from 'react-native';
import colors from 'tailwindcss/colors';

const useElementColor = (inverse: boolean = false) => {
  const colorScheme = useColorScheme();

  return React.useMemo(() => {
    if (inverse) {
      return colorScheme === 'dark' ? colors.neutral[900] : colors.neutral[100];
    }
    return colorScheme === 'dark' ? colors.neutral[100] : colors.neutral[900];
  }, [colorScheme, inverse]);
};

export default useElementColor;
