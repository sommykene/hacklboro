/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LoginNav from './src/components/navigation/LoginNavigation';
import LoginScreen from './src/screens/Login';

function App() {
  return (

    <>
      <StatusBar barStyle="dark-content" />

        <LoginNav />

    </>
  );
}

export default App;
