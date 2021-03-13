import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import AddCourse from '../../screens/AddCourse';
import TeachTabHome from '../../screens/TeachTabHome';
import EditCourse from '../../screens/EditCourse';

const Stack = createStackNavigator();

const TeachCourseStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={TeachTabHome}
      />
      <Stack.Screen name="Add Course" component={AddCourse} />
      <Stack.Screen name="Edit Course" component={EditCourse} />
    </Stack.Navigator>
  );
};

export default TeachCourseStack;
