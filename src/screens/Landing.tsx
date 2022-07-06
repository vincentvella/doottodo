import React from 'react';
import GlyphButton from '~/components/GlyphButton';
import { View, Text, Image } from '~/react-native';
import { AuthButtonConfigs } from '~/static/auth-button-configs';

const Landing = () => {
  return (
    <>
      <View className="w-full">
        <Image className="w-32 h-32 self-center" source={require('../../assets/trumpet.png')} />
        <Text className="self-center text-5xl">DootTodo</Text>
        <Text className="self-center text-3xl">Get More Done</Text>
      </View>
      <View className="max-w-2xl w-full self-center p-8">
        {AuthButtonConfigs.map(({ route, ...props }) => (
          <GlyphButton {...props} key={route} route={`/sign-in/${route}`} />
        ))}
      </View>
    </>
  );
};

export default Landing;
