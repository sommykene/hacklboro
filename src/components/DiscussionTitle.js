import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Spacer from '../utils/Spacer';

const DiscussionTitle = ({question, answer}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 18}}>{question}</Text>

      <Text>
        <Text style={{fontWeight: 'bold'}}>Jane: </Text>
        {answer}
      </Text>
      <Spacer />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Text>4 responses</Text>
        <Text style={{color: '#1792EB'}}>View Discussion</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default DiscussionTitle;
