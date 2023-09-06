import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Root: NavigatorScreenParams<TabBarStackParamList>;
};

export type TabBarStackParamList = {
  Home: undefined;
  Library: undefined;
  Account: undefined;
};

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabBarStackParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type LibraryScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabBarStackParamList, 'Library'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type AccountScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabBarStackParamList, 'Account'>,
  NativeStackScreenProps<RootStackParamList>
>;
