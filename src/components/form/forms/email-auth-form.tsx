import React from 'react';
import * as yup from 'yup';
import { Form } from '~/utils/form';
import { FormProps } from '~/utils/form/Form';
import TextInput from '../base/text-input';

const schema = yup.object({
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().min(8, 'must be longer than 8 characters').label('Password'),
});

const EmailAuthForm: React.FC<
  Pick<FormProps<yup.InferType<typeof schema>, typeof schema>, 'onError' | 'onSuccess'>
> = ({ onError, onSuccess }) => {
  return (
    <Form schema={schema} onError={onError} onSuccess={onSuccess}>
      <TextInput name="email" label="Email" autoCapitalize="none" placeholder="user@email.com" />
      <TextInput name="password" label="Password" secureTextEntry placeholder="******" />
      {/* <View className="p-4">
          <Text className="text-xl pt-4">Email</Text>
          <TextInput className="border border-light rounded p-2" placeholder="user@email.com" />
          <Text className="text-xl pt-4">Password</Text>
          <TextInput className="border border-light rounded p-2" placeholder="**********" />
        </View> */}
    </Form>
  );
};

export default EmailAuthForm;
