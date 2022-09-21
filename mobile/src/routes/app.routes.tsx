import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../screens/Home';
import {ThemePage} from '../screens/ThemePage';
import React from 'react';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />

      <Screen name="ThemePage" component={ThemePage} />
    </Navigator>
  );
}