import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '~/screens/Home';
import useElementColor from '~/hooks/useElementColor';
import { colors } from '~/theme';
import Todo from '~/screens/Todo';

const Tab = createBottomTabNavigator();

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
      <Tab.Screen component={Todo} name="todo" options={{ title: 'Todo' }} />
      <Tab.Screen component={Home} name="notes" options={{ title: 'Notes' }} />
      <Tab.Screen component={Home} name="progress" options={HomeOptions} />
      <Tab.Screen component={Home} name="saved" options={{ title: 'Saved' }} />
      <Tab.Screen component={Home} name="profile" options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
};

export default Authenticated;
