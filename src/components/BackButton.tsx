import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'solito/router';
import { TouchableOpacity, View } from '~/react-native';
import useElementColor from '~/hooks/useElementColor';

const BackButton = () => {
  const { back } = useRouter();
  const color = useElementColor();
  return (
    <View style={{ zIndex }}>
      <View className="absolute top-4 left-3">
        <TouchableOpacity onPress={back}>
          <FontAwesome name="arrow-left" size={30} color={color} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const zIndex = 5;

export default BackButton;
