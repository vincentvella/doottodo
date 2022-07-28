import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '~/screens/Home';
import useElementColor from '~/hooks/useElementColor';
import { colors } from '~/theme';
import Profile from '~/screens/Profile';
import { TodoStack, linkingConfig as todoLinkingConfig, TodoStackParams } from './todo';
import { RouteConfig } from './types';
import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthenticatedTabsParams = {
  todoRoot: NavigatorScreenParams<TodoStackParams>;
  notes: undefined;
  progress: undefined;
  saved: undefined;
  profile: undefined;
};

export const linkingConfig: RouteConfig<AuthenticatedTabsParams> = {
  initialRouteName: 'todoRoot',
  screens: {
    todoRoot: todoLinkingConfig,
    notes: { exact: true, path: 'notes' },
    progress: { exact: true, path: 'progress' },
    saved: { exact: true, path: 'saved' },
    profile: { exact: true, path: 'profile' },
  },
};

const Tab = createBottomTabNavigator<AuthenticatedTabsParams>();

const HomeOptions = { title: 'Progress', headerTitle: 'DootTodo' };

const Authenticated = () => {
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
    <Tab.Navigator initialRouteName="progress" screenOptions={screenOptions}>
      <Tab.Screen
        component={TodoStack}
        name="todoRoot"
        options={{ title: 'Todos', headerShown: false }}
      />
      <Tab.Screen component={Home} name="notes" options={{ title: 'Notes' }} />
      <Tab.Screen component={Home} name="progress" options={HomeOptions} />
      <Tab.Screen component={Home} name="saved" options={{ title: 'Saved' }} />
      <Tab.Screen component={Profile} name="profile" options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
};

export default Authenticated;
