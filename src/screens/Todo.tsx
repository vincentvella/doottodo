import React from 'react';
import { Button } from 'react-native';
import { useRouter } from 'solito/router';
import AddTodoButton from '~/features/todos/components/AddTodoButton';
import ListSelector from '~/features/todos/components/ListSelector';
import TodoList from '~/features/todos/components/TodoList';
import useInitializeUserLists from '~/features/todos/hooks/useInitilizeUserLists';
import useTasksForList from '~/features/todos/hooks/useTasksForList';
import { useListsQuery } from '~/generated/graphql';
import { View } from '~/react-native';

const Todo = () => {
  const { push } = useRouter();
  const [{ fetching: isLoadingList, data: lists }] = useListsQuery();
  // useInitializeUserLists(listResult);
  const { data: tasks, isLoading: isLoadingTasks } = useTasksForList();
  const navigateToAdd = React.useCallback(() => {
    push('/todos/add');
  }, []);
  return (
    <>
      <View>
        <ListSelector loading={isLoadingList} data={lists?.listsCollection?.edges || []} />
        <TodoList data={tasks?.data || []} loading={isLoadingTasks} />
      </View>
      <AddTodoButton onPress={navigateToAdd} />
    </>
  );
};

export default Todo;
