import React from 'react';
import { Link } from 'solito/link';
import AuthButtons from '~/components/AuthButtons';
import { View, Text, Image } from '~/react-native';

const Landing = () => {
  return (
    <>
      <View className="w-full">
        <Image className="w-32 h-32 self-center" source={require('../../assets/trumpet.png')} />
        <Text className="self-center text-5xl">DootTodo</Text>
        <Text className="self-center text-3xl">Get More Done</Text>
      </View>
      <AuthButtons routePrefix="/sign-up" />
      <View className="absolute bottom-0 p-4 w-full">
        <View className="flex-row self-center">
          <Text className="text-xl">Already have an account?&nbsp;</Text>
          <Link href="/sign-in">
            <Text className="text-xl font-bold">Sign In</Text>
          </Link>
        </View>
      </View>
    </>
  );
};

export default Landing;
