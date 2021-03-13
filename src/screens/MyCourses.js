import React from 'react';

import AddCourse from './AddCourse';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Thumbnail from '../components/courseThumbnail';
import Spacer from '../utils/Spacer';
import UserHeader from '../components/Header';

const MyCourses = ({navigation}) => {
  return (
    <>
      <UserHeader />
      <View style={{flex: 1, margin: 20}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            paddingBottom: 10,
            color: 'black',
          }}>
          My Courses
        </Text>
        <Spacer />
        <Thumbnail
          title="hfjds"
          onPress={() => navigation.navigate('ViewCourse')}
        />
        <Spacer />
        <Thumbnail />
        <Spacer />
        <Thumbnail />
        <Spacer />
        <Thumbnail />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttons: {
    padding: 20,
    backgroundColor: '#1792EB',
    borderRadius: 15,
  },
});
export default MyCourses;
