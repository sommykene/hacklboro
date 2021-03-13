import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AddLesson from '../components/teacherCourses/AddLesson';

const Spacer = () => {
  return <View style={{padding: 5}} />;
};

const LESSON_STATE = {
  lessonTitle: '',
  lessonDescription: '',
};

const AddCourse = () => {
  // store variables
  const [courseTitle, setCourseTitle] = useState('');
  const [courseOverview, setCourseOverview] = useState('');

  const [lessonData, setLessonData] = useState([]);

  const addLesson = () => {
    setLessonData([...lessonData, {...LESSON_STATE}]);
  };

  useEffect(() => {
    console.log(lessonData);
  }, [lessonData]);
  //   form for submitting teaching course
  return (
    <View style={{margin: 20}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', paddingBottom: 10}}>
        Edit Course
      </Text>

      {/* course title */}
      <TextInput
        style={styles.input}
        onChangeText={setCourseTitle}
        value={courseTitle}
        placeholder="Course Title"
      />
      <Spacer />

      {/* course overview */}
      <TextInput
        style={{minHeight: 100, textAlignVertical: 'top', ...styles.input}}
        onChangeText={setCourseTitle}
        value={courseTitle}
        placeholder="Course Overview"
        multiline={true}
      />
      <Spacer />
      <TextInput
        style={styles.input}
        onChangeText={setCourseTitle}
        value={courseTitle}
        placeholder="Course Title"
        multiline={true}
      />
      <Spacer />
      <Spacer />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 10}}>
          Lessons
        </Text>
        <TouchableOpacity onPress={() => addLesson()}>
          <Image
            style={{height: 20, width: 20}}
            source={require('../images/plus-icon.png')}
          />
        </TouchableOpacity>
      </View>
      {lessonData.map((item, index) => (
        <AddLesson
          key={index}
          ind={index}
          lessonData={lessonData}
          setLessonData={(data) => setLessonData(data)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    backgroundColor: '#C4C4C4',
    opacity: 0.5,
  },
});

export default AddCourse;
