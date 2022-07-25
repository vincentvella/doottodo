import { BottomSheetTextInputProps } from '@gorhom/bottom-sheet/src/components/bottomSheetTextInput';
import { StyledProps } from 'nativewind';
import * as React from 'react';
import { TextInputProps as RNTextInputProps, TextInput as RNTextInput } from 'react-native';
import { Text, TextInput as StyledTextInput } from '~/react-native';
import { FieldActions, useFieldError, useFieldRef } from '~/utils/form';
import HelperText from './helper-text';

type TextInputProps = RNTextInputProps & FieldActions;

export interface TextFieldProps extends Omit<TextInputProps, 'value' | 'error' | 'focus'> {
  name: string;
  label: string;
  required?: boolean;
  helperText?: string;
  Input: any;
}

const TextInputWrapper = React.forwardRef<Record<string, unknown>, TextFieldProps>(
  ({ name, label, required, helperText, Input, ...props }, forwardedRef: React.Ref<unknown>) => {
    const [ref, [value, setValue]] = useFieldRef<TextFieldProps, string>(forwardedRef, name);
    const error = useFieldError(name);
    return (
      <>
        <Text className="text-xl pt-4">{label}</Text>
        <Input
          {...props}
          ref={ref}
          value={value}
          onChangeText={setValue}
          className="border border-dark dark:border-light rounded text-lg p-3"
          style={{ lineHeight: 18 }}
        />
        <HelperText visible={!!error} type="error">
          {error}
        </HelperText>
        {!!helperText && <HelperText type="info">{helperText}</HelperText>}
      </>
    );
  },
);

export default TextInputWrapper;
