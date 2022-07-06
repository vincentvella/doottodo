import React from 'react';
import { View, Text, Image } from '~/react-native';

const Landing = () => {
  return (
    <View className="w-full">
      <Image className="w-32 h-32 self-center" source={require('../../assets/icon.png')} />
      <Text className="text-light self-center text-5xl">DootTodo</Text>
      <Text className="text-light self-center text-3xl">Get More Done</Text>
    </View>
  );
};

export default Landing;
