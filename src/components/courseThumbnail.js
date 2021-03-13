import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'white',
    height: 90,
    elevation: 2,
  },
  t: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 15,
    paddingLeft: 3,
  },
  s: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 3,
  },
  d: {
    fontSize: 15,
    paddingLeft: 3,
  },
  img: {
    width: 50,
    height: 50,
    paddingRight: 20,
  },
});


const ThumbnailDesign = ({courseTeacher,courseTitle, courseDescription}) => {
  // variables (teacher,subject and description) for the particular lesson

  return (
    // thumbnail contents (image, subject, teacher and description)
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri:
            'https://cdn8.openculture.com/wp-content/uploads/2014/06/free-textbooks1.jpg',
        }}
      />
      <View style={{flex: 1, paddingLeft: 10}}>
        <Text>
          <Text>
            <Text style={styles.s}>{courseTitle}</Text>
            <Text style={styles.d}>
              {'\n'}
              {courseDescription}
            </Text>
          </Text>
        </Text>
        <Text>
          <Text style={styles.t}>{courseTeacher}</Text>
        </Text>
      </View>
    </View>
  );
};

// enabling the thumbnail to be clickable
const Thumbnail = ({courseTitle, courseDescription, courseTeacher, onPress,}) => {

  return (
    <View>
      <TouchableOpacity onPress={onPress} underlayColour="blue">
        <ThumbnailDesign
          courseTitle={courseTitle}
          courseDescription={courseDescription}
          courseTeacher={courseTeacher}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Thumbnail;
