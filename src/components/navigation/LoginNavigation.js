import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import 'react-native-gesture-handler';

import LoginScreen from '../../screens/Login';
import Signup from '../../screens/Signup';
import ViewChooser from '../../screens/ViewChooser';
import TabNavigatorTeacher from './TabNavigatorTeacher';
import TabNavigatorStudent from './TabNavigatorStudent';

enableScreens();
const Stack = createNativeStackNavigator();

function Nav() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewChooser"
        component={ViewChooser}
        options={{headerShown: false}}
        initialParams={{showAll: true}}
      />
      <Stack.Screen
        name="TeacherNav"
        component={TabNavigatorTeacher}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StudentNav"
        component={TabNavigatorStudent}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="TeacherNav"
        component={TabNavigatorTeacher}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}

export default function LoginNav() {
  return <Nav />;
}
