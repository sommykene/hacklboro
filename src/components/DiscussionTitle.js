import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Spacer from '../utils/Spacer';

{/*a discussion needs a question and answer to start*/}
const DiscussionTitle = ({question, answer}) => {
  return (
    <View style={styles.container}>
      {/*discussion question*/}
      <Text style={{fontWeight: 'bold', fontSize: 18}}>{question}</Text>
      {/*discussion answer*/}
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
      {/*discussion responses*/}
        <Text>4 responses</Text>
      {/*view discussion link*/}
        <Text style={{color: '#1792EB'}}>View Discussion</Text>
      </View>
    </View>
  );
};
{/*style sheet*/}
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
