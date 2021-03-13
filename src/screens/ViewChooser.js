import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import BlueButtonText from '../components/BlueButtonText';
const ViewChooser = ({route, navigation}) => {
  const {showAll} = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Alert.alert('GENERAL Button pressed')}>
          <BlueButtonText text="GENERAL" />
        </TouchableOpacity>
      </View>

      {showAll === true ? (
        <>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('StudentNav')}>
              <BlueButtonText text="STUDENT" />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('TeacherNav')}>
              <BlueButtonText text="TEACHER" />
            </TouchableOpacity>
          </View>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '70%',
  },
});

export default ViewChooser;
