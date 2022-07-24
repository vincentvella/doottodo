import zod from 'zod';
import React from 'react';
import { Form } from '~/utils/form';
import { FormProps } from '~/utils/form/Form';
import Button from '../base/button';
import ErrorBubble from '../base/form-bubble';
import TextInput from '../base/text-input';

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8, { message: 'Must be longer than 8 characters' }),
});

export type EmailFormType = FormProps<zod.infer<typeof schema>, typeof schema>;

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
