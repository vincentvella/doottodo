import React from 'react';
import { LayoutChangeEvent, Platform } from 'react-native';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { AnimatedText } from '~/react-native';
import { colors } from '~/theme';

type Props = React.ComponentPropsWithRef<typeof AnimatedText> & {
  /**
   * Type of the helper text.
   */
  type: 'error' | 'info';
  /**
   * Whether to display the helper text.
   */
  visible?: boolean;
  /**
   * TestID used for testing purposes
   */
  testID?: string;
};

const HelperText: React.FC<Props> = ({ visible, type, ...rest }) => {
  const textHeight = React.useRef<number>(0);
  const shown = useSharedValue(visible ? 1 : 0);

  React.useEffect(() => {
    if (visible) {
      // show text
      shown.value = withTiming(1, { duration: 150 });
    } else {
      // hide text
      shown.value = withTiming(0, { duration: 180 });
    }
  }, [visible, shown]);

  const handleTextLayout = (e: LayoutChangeEvent) => {
    textHeight.current = e.nativeEvent.layout.height;
  };

  const animatedStyle = useAnimatedStyle(() => {
    if (visible && type === 'error') {
      return {
        opacity: shown.value,
        transform: [
          {
            translateY: shown.value,
          },
        ],
      };
    }
    return {
      opacity: shown.value,
    };
  });
  const className = type === 'error' ? `text-${Platform.select(colors.error)}` : '';
  return (
    <AnimatedText {...rest} className={className} onLayout={handleTextLayout} style={animatedStyle}>
      {rest.children}
    </AnimatedText>
  );
};

export default HelperText;
