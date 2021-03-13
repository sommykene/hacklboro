import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

//blue text box, needs text input
const BlueButtonText = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1792EB',
    borderRadius: 10,
    padding: 15,
    // width: '50%',
    // flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
});

export default BlueButtonText;
