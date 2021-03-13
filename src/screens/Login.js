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
  main: {
    flex:1,
  },
});

const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');

  const passwordInputRef = createRef();

  return (
    <View style={styles.main}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.main}>
          <KeyboardAvoidingView enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Text>Login!</Text>
            </TouchableWithoutFeedback>
            <View style={styles.main}>
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
            </View>
            <View style={styles.main}>
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

            <TouchableOpacity
              onPress={() => navigation.navigate('ViewChooser')}>
              <Text>LOGIN</Text>
            </TouchableOpacity>

            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Signup')}>
              <Text>Click here to register a new account!</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('ViewChooser')}>
              <Text>Continue as Guest</Text>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
