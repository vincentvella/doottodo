import React from 'react';
import { View, Text, Image, TextInput } from '~/react-native';

const Landing = () => {
  return (
    <>
      <View className="w-full">
        <Image className="w-32 h-32 self-center" source={require('../../assets/icon.png')} />
        <Text className="self-center text-5xl">DootTodo</Text>
        <Text className="self-center text-3xl">Get More Done</Text>
      </View>
      <View className="p-4">
        <Text className="text-xl pt-4">Email</Text>
        <TextInput className="border border-light rounded p-2" placeholder="user@email.com" />
        <Text className="text-xl pt-4">Password</Text>
        <TextInput className="border border-light rounded p-2" placeholder="**********" />
      </View>
    </>
  );
};

export default Landing;
