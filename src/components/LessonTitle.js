import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const arrow = require('../images/arrow.png');

const LessonTitle = ({title, locked}) => {
  return (
    <View style={{height: 55}}>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}> {title} </Text>
        {locked != true ? <Image source={arrow} /> : null}
      </View>

      {locked === true ? (
        //this will appear if lesson is locked
        <View style={styles.overlay}></View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    padding: 15,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(12,23,36,0.5)',
    borderRadius: 10,
  },
});

export default LessonTitle;
