import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import colors from 'tailwindcss/colors';
import { PressableOpacity, View } from '~/react-native';

const AddTodoButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <View className="absolute bottom-4 right-4">
      <PressableOpacity
        onPress={onPress}
        className="bg-accent p-6 rounded-full shadow-2xl"
        activeOpacity={0.8}
      />
      <View pointerEvents="none" className="absolute w-12 h-12">
        <View className="flex-1 items-center justify-center">
          <FontAwesome name="plus" size={24} color={colors.neutral[100]} />
        </View>
      </View>
    </View>
  );
};

export default AddTodoButton;
