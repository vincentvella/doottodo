import React from 'react';
import { useColorScheme } from 'nativewind';
import { colors } from '~/theme';

const useElementColor = (inverse: boolean = false) => {
  const { colorScheme } = useColorScheme();

  return React.useMemo(() => {
    if (inverse) {
      return colorScheme === 'dark' ? colors.dark : colors.light;
    }
    return colorScheme === 'dark' ? colors.light : colors.dark;
  }, [colorScheme, inverse]);
};

export default useElementColor;
