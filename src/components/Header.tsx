import React from 'react';
import { H1, H3, View } from '~/react-native';
import BackButton from './BackButton';

type HeaderProps = {
  title: string;
  subtitle?: string;
  backEnabled?: boolean;
};
const Header: React.FC<HeaderProps> = ({ title, subtitle, backEnabled = true }) => (
  <>
    {backEnabled && <BackButton />}
    <View className="items-center p-4">
      <H1>{title}</H1>
      {subtitle !== undefined && <H3>{subtitle}</H3>}
    </View>
  </>
);

export default Header;
