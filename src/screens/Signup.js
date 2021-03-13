import React, {useState, createRef} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BlueButtonText from '../components/BlueButtonText';
import Spacer from '../utils/Spacer';

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingRight: 10,
    paddingLeft: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'grey',
    paddingBottom: 10,
  },
  RegisterStyle: {
    borderRadius: 8,
    backgroundColor: 'grey',
    padding: 20,
    alignItems: 'center',
    alignContent: 'center',
  },
});

const Signup = ({navigation}) => {
  // getters and setters for registering an account using your name, username and password
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [prefName, setPrefName] = useState('');
  const [error, setError] = useState('');
  const [regSuccess, setRegSuccess] = useState(false);

  const userNameInputRef = createRef();
  const passwordInputRef = createRef();

  if (regSuccess) {
    return (
      // confirmation of registration
      <View>
        <Text>Registration Successful</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('login')}>
          <Text>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{flex: 1, padding: 30}}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView enabled>
          <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>
            Sign Up
          </Text>
          <Spacer />
          <Spacer />

          {/* entering registration details  */}
          <View>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(user) => setUserName(user)}
              placeholder="Enter username (the name you login with"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <Spacer />
          <View>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(name) => setPrefName(name)}
              placeholder="Enter screen name (the name you will seen as)"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          <Spacer />

          <View>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(pass) => setUserPassword(pass)}
              placeholder="Enter Password"
              returnKeyType="next"
              onSubmitEditing={() =>
                userNameInputRef.current && userNameInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <Spacer />
          <Spacer />

          {/* register btn */}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <BlueButtonText text="REGISTER" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Signup;
