import { PathConfigMap } from '@react-navigation/native';

export type RouteConfig<T = ReactNavigation.RootParamList> = {
  initialRouteName?: keyof PathConfigMap<T> | undefined;
  screens: PathConfigMap<T>;
};
