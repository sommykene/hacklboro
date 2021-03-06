/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import LoginNav from './src/components/navigation/LoginNavigation';
import TabNavigationTeacher from './src/components/navigation/TabNavigatorTeacher';
import TopTabNavLessons from './src/components/navigation/TopTabNavLesson';
import VideoPlayer from './src/components/VideoPlayer';

function App() {
  return (
    <NavigationContainer>
      <LoginNav />
      {/* <VideoPlayer videoID={'p33BYf1NDAE'} />
      <TopTabNavLessons /> */}
    </NavigationContainer>
  );
}

export default App;
