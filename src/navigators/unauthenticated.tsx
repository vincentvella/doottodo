import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '~/screens/SignUp';
import Landing from '~/screens/Landing';
import SignIn from '~/screens/SignIn';
import SignUpEmail from '~/screens/SignUpEmail';
import { RouteConfig } from './types';
import SignInEmail from '~/screens/SignInEmail';

export type UnauthenticatedStackParams = {
  landing: undefined;
  'sign-up': undefined;
  'sign-in': undefined;
  'sign-in/email': undefined;
  'sign-up/email': undefined;
};

export const linkingConfig: RouteConfig<UnauthenticatedStackParams> = {
  initialRouteName: 'landing',
  screens: {
    'sign-in': { exact: true, path: 'sign-in' },
    'sign-up': { exact: true, path: 'sign-up' },
    'sign-in/email': { exact: true, path: 'sign-in/email' },
    'sign-up/email': { exact: true, path: 'sign-up/email' },
    landing: { exact: true, path: '/' },
  },
};

const Stack = createNativeStackNavigator<UnauthenticatedStackParams>();

const UnAuthenticated = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Landing} name="landing" options={{ headerTitle: 'DootTodo' }} />
        <Stack.Screen component={SignUp} name="sign-up" options={{ headerTitle: 'Sign Up' }} />
        <Stack.Screen component={SignIn} name="sign-in" options={{ headerTitle: 'Sign In' }} />
        <Stack.Screen
          component={SignInEmail}
          name="sign-in/email"
          options={{ headerTitle: 'Sign In' }}
        />
        <Stack.Screen
          component={SignUpEmail}
          name="sign-up/email"
          options={{ headerTitle: 'Sign Up - Email' }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default UnAuthenticated;
