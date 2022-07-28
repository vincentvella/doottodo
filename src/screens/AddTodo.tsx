import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Button from '~/components/form/base/button';
import TextInput from '~/components/form/base/text-input';
import { AddTodo, addTodo } from '~/features/todos/validations';
import { View } from '~/react-native';
import { Form } from '~/utils/form';

const AddTodoPage = () => {
  // const { refetch } = useQuery(['todos'], getTodos, { enabled: false });
  // const { mutate } = useMutation(create, {
  //   onSuccess: () => {
  //     refetch();
  //   },
  // });
  const handleOnSuccess = React.useCallback((data: AddTodo) => {
    console.log(data);
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
