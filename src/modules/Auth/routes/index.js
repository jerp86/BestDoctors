import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CreateAccountScreen, LoginScreen, SplashScreen } from '../Screens';

export const AuthNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
    </Stack.Navigator>
  );
};
