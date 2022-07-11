import React from 'react';
import { ActivityIndicator, ViewStyle } from 'react-native';
import { useIsSubmitting, useSubmit } from '~/utils/form';
import { PressableOpacity, Text } from '~/react-native';

type ButtonProps = {
  title?: string;
};

const Button: React.FC<ButtonProps> = ({ title = text.defaultTitle }) => {
  const submit = useSubmit();
  const isSubmitting = useIsSubmitting();
  // const isValid = useIsFormValid()
  return (
    <PressableOpacity
      className="bg-primary rounded-2xl flex-row p-4 items-center w-full mt-3"
      onPress={submit}
      disabled={isSubmitting}
      disabledOpacity={0.5}
    >
      <Text className="capitalize text-2xl font-medium w-full text-center" suppressHighlighting>
        {isSubmitting ? (
          <>
            <Text>Submitting&nbsp;</Text>
            <ActivityIndicator />
          </>
        ) : (
          title
        )}
      </Text>
    </PressableOpacity>
  );
};

const text = {
  defaultTitle: 'Submit',
};

export default Button;
