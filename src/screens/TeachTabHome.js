import React from 'react';

import AddCourse from './AddCourse';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Thumbnail from '../components/courseThumbnail';
import Spacer from '../utils/Spacer';

const TeachTabHome = ({navigation}) => {
  return (
    <View style={{flex: 1, margin: 20}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          paddingBottom: 10,
          color: 'black',
        }}>
        Manage Courses
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.navigate('Add Course')}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
            }}>
            Add Course
          </Text>
        </TouchableOpacity>
      </View>
      <Spacer />
      <Thumbnail />
      <Spacer />
      <Thumbnail />
      <Spacer />
      <Thumbnail />
      <Spacer />
      <Thumbnail />
      <Spacer />
      {/* <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.navigate('Edit Course')}>
          <Text>Edit Your Course</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.navigate('View Course')}>
          <Text>View Course</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    padding: 20,
    backgroundColor: '#1792EB',
    borderRadius: 15,
  },
});
export default TeachTabHome;
