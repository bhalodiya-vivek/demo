import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import AuthRoutes from './auth-routes';
import AppRoutes from './app-routes';
import {useAppSelector} from '../store';

const RootNavigator = () => {
  const {isUserSignedIn} = useAppSelector(state => state.auth);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isUserSignedIn ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
