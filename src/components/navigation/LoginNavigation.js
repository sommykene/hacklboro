import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from '../../screens/Login';
import Signup from '../../screens/Signup';
import ViewChooser from '../../screens/ViewChooser';

enableScreens();
const Stack = createNativeStackNavigator();

function Nav() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ViewChooser" component={ViewChooser} />
    </Stack.Navigator>
  );
}

export default function LoginNav() {
  return (
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  );
}
