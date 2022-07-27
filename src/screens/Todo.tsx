import React from 'react';
import ListSelector from '~/features/todos/components/ListSelector';
import useInitializeUserLists from '~/features/todos/hooks/useInitilizeUserLists';
import useLists from '~/features/todos/hooks/useLists';
import { View } from '~/react-native';

const Todo = () => {
  const result = useLists();
  useInitializeUserLists(result);
  const { data } = result;

  return (
    <View>
      <ListSelector loading={result.isLoading} data={data?.data || []} />
    </View>
  );
};

export default Todo;
