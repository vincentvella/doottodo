import React from 'react';
import { Button } from 'react-native';
import { useRouter } from 'solito/router';
import ListSelector from '~/features/todos/components/ListSelector';
import useInitializeUserLists from '~/features/todos/hooks/useInitilizeUserLists';
import useLists from '~/features/todos/hooks/useLists';
import { View } from '~/react-native';

const Todo = () => {
  const result = useLists();
  const { push } = useRouter();
  useInitializeUserLists(result);
  const { data } = result;

  const navigateToAdd = React.useCallback(() => {
    push('/add');
  }, []);
  return (
    <View>
      <ListSelector loading={result.isLoading} data={data?.data || []} />
      <Button title="Add Todo" onPress={navigateToAdd} />
      {/* <TodoList /> */}
    </View>
  );
};

export default Todo;
