import { PathConfig } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import useElementColor from '~/hooks/useElementColor';
import AddTodo from '~/screens/AddTodo';
import Todo from '~/screens/Todo';
import { colors } from '~/theme';

export type TodoStackParams = {
  todo: undefined;
  add: undefined;
};

export const linkingConfig: PathConfig<TodoStackParams> = {
  initialRouteName: 'todo',
  path: '/',
  screens: {
    todo: { exact: true, path: 'todo' },
    add: { exact: true, path: 'add' },
  },
};

const TodoStackNavigator = createNativeStackNavigator<TodoStackParams>();

export const TodoStack = () => {
  const color = useElementColor(true);
  const textColor = useElementColor(false);
  const screenOptions = React.useMemo(
    () => ({
      headerStyle: { backgroundColor: color },
      headerTitleStyle: { color: textColor },
      tabBarStyle: { backgroundColor: color },
      tabBarActiveTintColor: colors.accent,
    }),
    [color, textColor],
  );
  return (
    <TodoStackNavigator.Navigator initialRouteName="todo" screenOptions={screenOptions}>
      <TodoStackNavigator.Screen name="todo" component={Todo} options={{ title: 'Todos' }} />
      <TodoStackNavigator.Screen
        name="add"
        component={AddTodo}
        options={{ title: 'Add Todo', presentation: 'modal' }}
      />
    </TodoStackNavigator.Navigator>
  );
};
