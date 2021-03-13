import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BlueButtonText from '../components/BlueButtonText';
import AddLesson from '../components/teacherCourses/AddLesson';
import Spacer from '../utils/Spacer';

const LESSON_STATE = {
  lessonTitle: '',
  lessonDescription: '',
};

const EditCourse = () => {
  // store variables
  const [courseTitle, setCourseTitle] = useState('');
  const [courseOverview, setCourseOverview] = useState('');

  const [lessonData, setLessonData] = useState([]);

  const addLesson = () => {
    setLessonData([...lessonData, {...LESSON_STATE}]);
  };

  // useEffect(() => {
  // }, [lessonData]);
  //   form for submitting teaching course
  return (
    <ScrollView style={{margin: 20}} showsVerticalScrollIndicator={false}>
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
        onChangeText={setCourseOverview}
        value={courseOverview}
        placeholder="Course Overview"
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
        <>
          <AddLesson
            key={index}
            ind={index}
            lessonData={lessonData}
            setLessonData={(data) => setLessonData(data)}
          />
          <Spacer key={index + '1'} />
        </>
      ))}

      <Spacer />
      <View style={{flex: 1}}>
        <BlueButtonText text="Add Course" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    backgroundColor: '#C4C4C4',
    opacity: 0.5,
  },
});

export default EditCourse;
