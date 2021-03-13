import React, {useState} from 'react';
import {Image, Picker, StyleSheet, Text, View} from 'react-native';

//create header with name and drop down list
const UserHeader = () => {
  const [selectedValue, setSelectedValue] = useState('Guest');
  return (
    //name box on the top left
    <View style={styles.container}>
      <View style={{justifyContent: 'flex-start'}}>
        <Text> Sally </Text>
      </View>
      {/* drop down list with three options*/}
      <View style={styles.drop_down}>
        <Picker
          selectedValue={selectedValue}
          style={{height: 25, width: 150}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Guest" value="guest" />
          <Picker.Item label="Student" value="student" />
          <Picker.Item label="Teacher" value="teacher" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drop_down: {
    alignItems: 'flex-end',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1792EB',
    padding: 10,
    elevation: 2,
  },
});

export default UserHeader;
