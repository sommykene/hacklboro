import  React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

function MyCoursesScreen() {
  return (
    <View style={{ flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' }}>
      <Text>My Courses!</Text>
    </View>
  );
}

function BrowseScreen() {
  return (
    <View style={{ flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' }}>
      <Text>Training!</Text>
    </View>
  );
}

  function ProfileScreen() {
    return (
      <View style={{ flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
//comment
const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer shifting={false}>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen name="My Courses" component={MyCoursesScreen} />
        <Tab.Screen name="Training" component={BrowseScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

