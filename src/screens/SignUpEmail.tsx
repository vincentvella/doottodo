import React from 'react';
import { useRouter } from 'solito/router';
import EmailAuthForm, { EmailFormType } from '~/components/form/forms/email-auth-form';
import Header from '~/components/Header';
import { View } from '~/react-native';
import Supabase from '~/services/supabase';
import FormError from '~/utils/form/error';

const SignUpEmail = () => {
  const router = useRouter();
  const signUp: EmailFormType['onSuccess'] = React.useCallback(
    async (data) => {
      const { error, session } = await Supabase.auth.signUp(data);
      if (session) {
        router.replace('/');
      } else if (error) {
        throw new FormError(error.status, error.message);
      }
    },
    [router],
  );
  return (
    <>
      <Header title="Sign Up" subtitle="Enter your Email and Password" />
      <View className="p-4">
        <EmailAuthForm onSuccess={signUp} onError={(error) => console.log(error)} />
      </View>
    </>
  );
};

export default SignUpEmail;
