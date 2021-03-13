import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import BlueButtonText from '../components/BlueButtonText';
import Spacer from '../utils/Spacer';
import ViewChooser from './ViewChooser';

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
  LoginStyle: {
    borderRadius: 8,
    backgroundColor: 'grey',
    padding: 20,
    alignItems: 'center',
    alignContent: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 25,
    padding: 20,
    textAlign: 'center',
  },
  textStyle1: {
    textDecorationLine: 'underline',
    fontSize: 15,
    padding: 20,
    textAlign: 'center',
  },
});

export const LoggedIn = {
  yes: true,
  no: false,
};

const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');

  const passwordInputRef = createRef();

  return (
    <View style={{flex: 1, padding: 30}}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View>
          <KeyboardAvoidingView enabled>
            <Text
              style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>
              Login
            </Text>
            <Spacer />
            <Spacer />
            {/* gets rid of keyboard */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Text> </Text>
            </TouchableWithoutFeedback>

            {/* input login details */}
            <View>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(user) => setUserName(user)}
                placeholder="Enter Username"
                autoCapitalize="none"
                keyboardtype="default"
                returnKeyType="next"
                onSubmittedEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
              <Spacer />
              <TextInput
                style={styles.inputStyle}
                onChangeText={(pass) => setUserPassword(pass)}
                placeholder="Enter Password"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
            <Spacer />
            <Spacer />

            {/* login btn */}
            <TouchableOpacity
              onPress={() => navigation.navigate('ViewChooser')}>
              <BlueButtonText text="LOGIN" />
            </TouchableOpacity>

            {/* click to signup page */}
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Signup')}>
              <View>
                <Text style={styles.textStyle}>
                  Click here to register a new account!
                </Text>
              </View>
            </TouchableWithoutFeedback>

            {/* continue as guest */}
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('ViewChooser', {showAll: false})
              }>
              <Text style={styles.textStyle1}>Continue as Guest</Text>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
