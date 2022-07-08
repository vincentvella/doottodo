import React from 'react';
import { H1, H3, View } from '~/react-native';

type HeaderProps = {
  title: string;
  subtitle?: string;
};
const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <View className="items-center p-4">
    <H1>{title}</H1>
    {subtitle !== undefined && <H3>{subtitle}</H3>}
  </View>
);

export default Header;
