import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import ViewCourse from '../../screens/ViewCourse';
import MyCourses from '../../screens/MyCourses';
import TopTabNavLessons from './TopTabNavLesson';

const Stack = createStackNavigator();

const MyCourseStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={MyCourses}
      />
      <Stack.Screen
        name="ViewCourse"
        component={ViewCourse}
        options={{title: 'Course'}}
      />
    </Stack.Navigator>
  );
};

export default MyCourseStack;
