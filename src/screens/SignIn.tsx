import React from 'react';
import AuthButtons from '~/components/AuthButtons';
import BackButton from '~/components/BackButton';
import Header from '~/components/Header';
import { Text } from '~/react-native';

const SignIn = () => {
  return (
    <>
      <BackButton />
      <Header title="Sign In" />
      <AuthButtons routePrefix="/sign-in" />
    </>
  );
};

export default SignIn;
