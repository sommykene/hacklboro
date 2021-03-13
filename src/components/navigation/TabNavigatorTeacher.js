import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AddCourse from '../../screens/AddCourse';
import VideoPlayer from '../VideoPlayer';
import TeachCourseStack from './TeachCourseStack';

// icons
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faBookmark,
  faChalkboardTeacher,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import MyCourseStack from './MyCourseStack';

function TrainingScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Training!</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigationTeacher() {
  return (
    <Tab.Navigator
      shifting={false}
      initialRouteName="My Course"
      activeColor="#1792EB"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'My Courses') {
            iconName = faBookmark;
          } else if (route.name === 'Training') {
            iconName = faSearch;
          } else if (route.name === 'Teach') {
            iconName = faChalkboardTeacher;
          } else if (route.name === 'Profile') {
            iconName = faUser;
          }
          return <FontAwesomeIcon icon={iconName} color={color} />;
        },
      })}>
      {/* <Tab.Screen
        name="My Courses"
        component={VideoPlayer}
        initialParams={{videoId: 'p33BYf1NDAE'}}
      /> */}
      <Tab.Screen name="My Courses" component={MyCourseStack} />
      <Tab.Screen name="Training" component={TrainingScreen} />
      <Tab.Screen name="Teach" component={TeachCourseStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
