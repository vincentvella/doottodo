import * as React from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';
import { TextInput as StyledTextInput } from '~/react-native';
import { FieldActions } from '~/utils/form';
import TextInputWrapper from './text-input-wrapper';

type TextInputProps = RNTextInputProps & FieldActions;

export interface TextFieldProps extends Omit<TextInputProps, 'value' | 'error' | 'focus'> {
  name: string;
  label: string;
  required?: boolean;
  helperText?: string;
}

const TextInput = React.forwardRef<Record<string, unknown>, TextFieldProps>((props, ref) => {
  return <TextInputWrapper ref={ref} Input={StyledTextInput} {...props} />;
});

export default TextInput;
