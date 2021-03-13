import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BlueButtonText from '../BlueButtonText';

const Spacer = () => {
  return <View style={{padding: 5}} />;
};

const AddLesson = ({ind, lessonData, setLessonData}) => {
  // store variables
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonDescription, setLessonDescription] = useState('');

  const handleAdd = () => {
    const thisLesson = {
      lessonTitle: lessonTitle,
      lessonDescription: lessonDescription,
    };

    let updateData = [...lessonData];
    updateData[ind] = thisLesson;
    console.log(updateData[ind]);
    setLessonData(updateData);
  };

  //   Individual lessons
  return (
    <View>
      {/* lesson title */}
      <TextInput
        style={styles.input}
        onChangeText={setLessonTitle}
        value={lessonTitle}
        placeholder="Course Title"
      />
      <Spacer />
      <TextInput
        style={{minHeight: 60, textAlignVertical: 'top', ...styles.input}}
        onChangeText={setLessonDescription}
        value={lessonDescription}
        placeholder="Lesson Description"
        multiline={true}
      />

      <TouchableOpacity
        onPress={() => handleAdd()}
        style={{
          alignItems: 'flex-end',
          flex: 1,
          padding: 5,
        }}>
        <BlueButtonText text={'add'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    backgroundColor: '#C4C4C4',
    opacity: 0.5,
    width: '100%',
  },
});

export default AddLesson;
