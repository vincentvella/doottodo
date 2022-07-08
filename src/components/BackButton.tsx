import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'solito/router';
import { TouchableOpacity, View } from '~/react-native';

const BackButton = () => {
  const { back } = useRouter();
  return (
    <View style={{ zIndex }}>
      <View className="absolute top-4 left-3">
        <TouchableOpacity onPress={back}>
          <FontAwesome name="arrow-left" size={30} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const zIndex = 5;

export default BackButton;
