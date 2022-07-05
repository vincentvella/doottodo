import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '~/screens/Home';

const Stack = createNativeStackNavigator();

const Authenticated = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Home} name="home" />
    </Stack.Navigator>
  );
};

export default Authenticated;
