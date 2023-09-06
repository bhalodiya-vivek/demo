import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  RootStackParamList,
  TabBarStackParamList,
} from '../../types/navigation/appTypes';
import Home from '../../screens/app-screens/Home';
import Library from '../../screens/app-screens/Library';
import Account from '../../screens/app-screens/Account';
import HomeIcon from '../../assets/svg/Home';
import {COLORS} from '../../theme/Colors';

const Tab = createBottomTabNavigator<TabBarStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={TabBar} name="Root" />
    </Stack.Navigator>
  );
};

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({focused}) => {
          let icon;
          let color = focused
            ? COLORS.TAB.ACTIVE_COLOR
            : COLORS.TAB.INACTIVE_COLOR;
          if (route.name === 'Home') {
            icon = <HomeIcon color={color} />;
          } else if (route.name === 'Library') {
            icon = <HomeIcon color={color} />;
          } else if (route.name === 'Account') {
            icon = <HomeIcon color={color} />;
          }
          return icon;
        },
        tabBarActiveTintColor: COLORS.TAB.ACTIVE_COLOR,
        tabBarInactiveTintColor: COLORS.TAB.INACTIVE_COLOR,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default AppRoutes;
