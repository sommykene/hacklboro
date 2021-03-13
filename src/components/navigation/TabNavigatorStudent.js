import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// icons
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faBookmark,
  faChalkboardTeacher,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import MyCourseStack from './MyCourseStack';
import SearchPage from '../../screens/SearchPage';
import MyProfile from '../../screens/ProfileScreen';

function BrowseScreen() {
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

export default function TabNavigationStudent() {
  return (
    <Tab.Navigator
      initialRouteName="My Courses"
      activeColor="#1792EB"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'My Courses') {
            iconName = faBookmark;
          } else if (route.name === 'Browse Course') {
            iconName = faSearch;
          } else if (route.name === 'Profile') {
            iconName = faUser;
          }
          return <FontAwesomeIcon icon={iconName} color={color} />;
        },
      })}>
      <Tab.Screen
        name="My Courses"
        component={MyCourseStack}
        initialParams={{type: 'Student'}}
      />
      <Tab.Screen name="Browse Course" component={SearchPage} />
      <Tab.Screen name="Profile" component={MyProfile} />
    </Tab.Navigator>
  );
}
