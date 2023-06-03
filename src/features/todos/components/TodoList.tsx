import React from 'react';
import { FlatList, Text, View } from '~/react-native';
import { FlatListProps } from '~/types/flatlist';
import { definitions } from '~/types/supabase';

const TodosList = FlatList<definitions['tasks']>();

type TodosListProps = FlatListProps<definitions['tasks']>;

const keyExtractor: TodosListProps['keyExtractor'] = ({ id }) => id;

const renderItem: TodosListProps['renderItem'] = ({ item, index }) => (
  <View>
    <Text>{item.summary}</Text>
  </View>
);

const TodoList: React.FC<{ data: definitions['tasks'][]; loading: boolean }> = ({
  data,
  // loading,
}) => {
  return (
    <TodosList className="p-4" data={data} keyExtractor={keyExtractor} renderItem={renderItem} />
  );
};

export default TodoList;
