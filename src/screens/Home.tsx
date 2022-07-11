import React from 'react';
import { Text } from '~/react-native';
import { useUser } from '~/services/supabase';

const Home = () => {
  const { user } = useUser();
  return <Text>{JSON.stringify(user)}</Text>;
};

export default Home;
