import React from 'react';
import { Text, View } from '~/react-native';
import { useFieldError } from '~/utils/form';
import { platformColor } from '~/utils/platform-color';

const errorColor = platformColor('error');

const ErrorBubble = () => {
  const error = useFieldError('_form');
  if (!!error) {
    return (
      <View className="px-3 py-2 rounded" style={{ backgroundColor: errorColor }}>
        <Text className="font-medium text-lg">{error}</Text>
      </View>
    );
  }
  return null;
};

export default ErrorBubble;
