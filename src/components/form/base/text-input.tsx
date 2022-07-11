import * as React from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';
import { Text, TextInput as StyledTextInput } from '~/react-native';
import { FieldActions, useFieldError, useFieldRef } from '~/utils/form';
import HelperText from './helper-text';

type TextInputProps = RNTextInputProps & FieldActions;

export interface TextFieldProps extends Omit<TextInputProps, 'value' | 'error' | 'focus'> {
  name: string;
  label: string;
  required?: boolean;
  helperText?: string;
}

const TextInput = React.forwardRef<Record<string, unknown>, TextFieldProps>(
  ({ name, label, required, helperText, ...props }, forwardedRef: React.Ref<unknown>) => {
    const [ref, [value, setValue]] = useFieldRef<TextFieldProps, string>(forwardedRef, name);
    const error = useFieldError(name);
    return (
      <>
        <Text className="text-xl pt-4">{label}</Text>
        <StyledTextInput
          {...props}
          ref={ref}
          value={value}
          style={{ lineHeight: 18 }}
          onChangeText={setValue}
          className="border border-light rounded text-lg p-3"
        />
        <HelperText visible={!!error} type="error">
          {error}
        </HelperText>
        {!!helperText && <HelperText type="info">{helperText}</HelperText>}
      </>
    );
  },
);

export default TextInput;
