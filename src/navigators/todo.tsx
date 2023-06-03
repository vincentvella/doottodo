import { FontAwesome } from '@expo/vector-icons';
import { PathConfig } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import twColors from 'tailwindcss/colors';
import useElementColor from '~/hooks/useElementColor';
import AddTodo from '~/screens/AddTodo';
import Todo from '~/screens/Todo';
import { colors } from '~/theme';

export type TodoStackParams = {
  todos: undefined;
  add: undefined;
};

export const linkingConfig: PathConfig<TodoStackParams> = {
  initialRouteName: 'todos',
  screens: {
    todos: { exact: true, path: 'todos' },
    add: { exact: true, path: 'todos/add' },
  },
};

const TodoStackNavigator = createNativeStackNavigator<TodoStackParams>();

const CloseModalButton = (props: HeaderButtonProps) => (
  <FontAwesome size={24} color={twColors.neutral[100]} />
);

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
    <TodoStackNavigator.Navigator screenOptions={screenOptions}>
      <TodoStackNavigator.Screen name="todos" component={Todo} options={{ title: 'Todos' }} />
      <TodoStackNavigator.Screen
        name="add"
        component={AddTodo}
        options={{ title: 'Add Todo', presentation: 'modal', headerRight: CloseModalButton }}
      />
    </TodoStackNavigator.Navigator>
  );
};
