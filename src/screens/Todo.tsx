import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react';
import { getLists, initialize } from '~/features/todos/api';
import { View } from '~/react-native';

const Todo = () => {
  const { data, isError, isFetched, refetch } = useQuery(['lists'], getLists);
  const initializeLists = useMutation(initialize, { onSuccess: () => refetch() });
  console.log(isFetched, data?.data);
  React.useEffect(() => {
    if (isFetched && !isError && Array.isArray(data?.data) && !data?.data.length) {
      initializeLists.mutate();
    }
  }, [isError, isFetched, data]);
  console.log(data);
  return <View></View>;
};

export default Todo;
