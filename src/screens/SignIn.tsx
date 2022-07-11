import React from 'react';
import AuthButtons from '~/components/AuthButtons';
import Header from '~/components/Header';

const SignIn = () => {
  return (
    <>
      <Header title="Sign In" />
      <AuthButtons routePrefix="/sign-in" />
    </>
  );
};

export default SignIn;
