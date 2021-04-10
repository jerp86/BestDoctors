import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SplashScreen } from '../Screens';

export const AuthNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};
