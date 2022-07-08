import React from 'react';
import { View } from '~/react-native';
import { AuthButtonConfigs } from '~/static/auth-button-configs';
import GlyphButton from './GlyphButton';

type AuthButtonsProps = {
  routePrefix: '/sign-in' | '/sign-up';
};

const AuthButtons: React.FC<AuthButtonsProps> = ({ routePrefix }) => {
  return (
    <View className="max-w-2xl w-full self-center p-8">
      {AuthButtonConfigs.map(({ route, ...props }) => (
        <GlyphButton {...props} key={route} route={`${routePrefix}/${route}`} />
      ))}
    </View>
  );
};

export default AuthButtons;
