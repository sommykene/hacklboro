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

const ThumbnailDesign = () => {
  // variables (teacher,subject and description) for the particular lesson
  const teacher = 'M. Jones';
  const subject = 'Maths';
  const desc = 'This is a maths course';


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
            <Text style={styles.s}>{subject}</Text>
            <Text style={styles.d}>
              {'\n'}
              {desc}
            </Text>
          </Text>
        </Text>
        <Text>
          <Text style={styles.t}>{teacher}</Text>
        </Text>
      </View>
    </View>
  );
};

// enabling the thumbnail to be clickable
const Thumbnail = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} underlayColour="blue">
        <ThumbnailDesign />
      </TouchableOpacity>
    </View>
  );
};

export default Thumbnail;
