import React, {useState} from 'react';

import AddCourse from './AddCourse';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Thumbnail from '../components/courseThumbnail';
import Spacer from '../utils/Spacer';
import UserHeader from '../components/Header';

import courseData from '../utils/courseData.json';

const MyCourses = ({navigation, type}) => {
  console.log(type);
  var arr = [];

  Object.keys(courseData).forEach((key) => {
    arr.push(courseData[key]);
  });

  const [courseList, updateCourseList] = useState(arr);

  var results = courseList.map((item, i) =>
    item.type === 'Teacher' ? (
      <>
        <Thumbnail
          key={item.courseTitle}
          courseTitle={item.courseTitle}
          courseDescription={item.courseDescription}
          courseTeacher={item.courseTeacher}
          onPress={() => navigation.navigate('ViewCourse')}
        />
        <Spacer />
      </>
    ) : null,
  );

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
        <ScrollView>{results}</ScrollView>
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
