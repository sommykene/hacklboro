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

import courseData from '../utils/courseData.json';

const TeachTabHome = ({navigation}) => {
  const [search, setSearch] = useState('');

  var arr = [];

  Object.keys(courseData).forEach((key) => {
    arr.push(courseData[key]);
  });

  const [courseList, updateCourseList] = useState(arr);

  var results = courseList.map((item, i) =>
    item.type === 'Student' ? (
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
      <ScrollView>{results}</ScrollView>
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
