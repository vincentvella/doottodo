import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useRouter } from 'solito/router';
import Button from '~/components/form/base/button';
import TextInput from '~/components/form/base/text-input';
import { createTask } from '~/features/todos/api';
import { AddTodo, addTodo } from '~/features/todos/validations';
import { View } from '~/react-native';
import { Form } from '~/utils/form';

const AddTodoPage = () => {
  const queryClient = useQueryClient();
  const { back } = useRouter();
  const { mutateAsync } = useMutation(createTask, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['tasks']);
      back();
    },
    onError: console.error,
  });
  const handleOnSuccess = React.useCallback(async (data: AddTodo) => {
    console.log({ data });
    await mutateAsync({ started: false, ...data });
  }, []);
  return (
    <View className="p-4">
      <Form
        schema={addTodo}
        defaultValues={{ started: false }}
        onSuccess={handleOnSuccess}
        onError={console.error}
      >
        <TextInput label="Summary" name="summary" />
        <Button />
      </Form>
    </View>
  );
};

export default AddTodoPage;
