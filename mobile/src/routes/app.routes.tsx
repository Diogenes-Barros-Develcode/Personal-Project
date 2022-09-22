import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../screens/Home';
import {ThemePage} from '../screens/ThemePage';
import React from 'react';
import {EspecificationThemePage} from '../screens/EspecificationThemePage';
import {Activities} from '../screens/Activities';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />

      <Screen name="ThemePage" component={ThemePage} />

      <Screen
        name="EspecificationThemePage"
        component={EspecificationThemePage}
      />

      <Screen name="Activities" component={Activities} />
    </Navigator>
  );
}
