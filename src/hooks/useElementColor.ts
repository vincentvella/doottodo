import { useColorScheme } from 'nativewind';
import { colors } from '~/theme';

const useElementColor = (inverse: boolean = false) => {
  const { colorScheme } = useColorScheme();
  if (inverse) {
    return colorScheme === 'dark' ? colors.dark : colors.light;
  }
  return colorScheme === 'dark' ? colors.light : colors.dark;
};

export default useElementColor;
