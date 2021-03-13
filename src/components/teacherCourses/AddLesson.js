import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Spacer from '../../utils/Spacer';
import BlueButtonText from '../BlueButtonText';

const AddLesson = ({ind, lessonData, setLessonData}) => {
  // store variables
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonDescription, setLessonDescription] = useState('');
  const [liveDate, setLiveDate] = useState('');
  const [liveTime, setLiveTime] = useState('');
  const [isLive, setIsLive] = useState(false);

  const handleAdd = () => {
    const thisLesson = {
      lessonTitle: lessonTitle,
      lessonDescription: lessonDescription,
    };

    let updateData = [...lessonData];
    updateData[ind] = thisLesson;
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
        placeholder="Lesson Title"
      />
      <Spacer />
      <TextInput
        style={{minHeight: 60, textAlignVertical: 'top', ...styles.input}}
        onChangeText={setLessonDescription}
        value={lessonDescription}
        placeholder="Lesson Description"
        multiline={true}
      />

      {isLive === true ? (
        <>
          <Spacer />
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{...styles.input, width: '40%'}}
              onChangeText={setLiveDate}
              value={liveDate}
              placeholder="Live Date"
            />
            <Spacer />
            <TextInput
              style={{...styles.input, width: '40%'}}
              onChangeText={setLiveTime}
              value={liveTime}
              placeholder="Live Time"
            />
          </View>
        </>
      ) : null}

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingLeft: 0,
          width: '100%',
        }}>
        {/* make lesson live lesson */}
        <TouchableOpacity
          onPress={() => setIsLive(!isLive)}
          style={{
            padding: 5,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 30, width: 30, resizeMode: 'contain'}}
            source={
              isLive === false
                ? require('../../images/unchecked.png')
                : require('../../images/checked.png')
            }
          />
          <Spacer />
          <Text>Make Live</Text>
        </TouchableOpacity>
        <Spacer />

        {/* upload video */}
        {isLive === false ? (
          <TouchableOpacity
          // onPress={() => handleAdd()}
          >
            <BlueButtonText text={'Upload Video'} />
          </TouchableOpacity>
        ) : null}

        {/*  finalise lesson */}
        <TouchableOpacity
          onPress={() => handleAdd()}
          style={{
            padding: 5,
          }}>
          <BlueButtonText text={'Finish'} />
        </TouchableOpacity>
      </View>
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
