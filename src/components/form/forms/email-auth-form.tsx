import React from 'react';
import * as yup from 'yup';
import { Form } from '~/utils/form';
import { FormProps } from '~/utils/form/Form';
import Button from '../base/button';
import ErrorBubble from '../base/form-bubble';
import TextInput from '../base/text-input';

const schema = yup.object({
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().min(8, 'must be longer than 8 characters').label('Password'),
});

export type EmailFormType = FormProps<yup.InferType<typeof schema>, typeof schema>;

const EmailAuthForm: React.FC<Pick<EmailFormType, 'onError' | 'onSuccess'>> = ({
  onError,
  onSuccess,
}) => (
  <Form schema={schema} onError={onError} onSuccess={onSuccess}>
    <ErrorBubble />
    <TextInput name="email" label="Email" autoCapitalize="none" placeholder="user@email.com" />
    <TextInput name="password" label="Password" secureTextEntry placeholder="******" />
    <Button />
  </Form>
);

export default EmailAuthForm;
