import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  ConfirmPhoneScreen,
  CreateAccountScreen,
  LoginScreen,
  SelectAccountTypeScreen,
  SplashScreen,
} from '../Screens';

export const AuthNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen
        name="SelectAccountType"
        component={SelectAccountTypeScreen}
      />
      <Stack.Screen name="ConfirmPhone" component={ConfirmPhoneScreen} />
    </Stack.Navigator>
  );
};
