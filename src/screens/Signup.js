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

const Signup = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [prefName, setPrefName] = useState('');
  const [error, setError] = useState('');
  const [regSuccess, setRegSuccess] = useState(false);

  const userNameInputRef = createRef();
  const passwordInputRef = createRef();

  if (regSuccess) {
    return (
      <View>
        <Text>Registration Successful</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('login')}>
          <Text>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView enabled>
          <View>
            <TextInput
              onChangeText={(user) => setUserName(user)}
              placeholder="Enter username (the name you login with"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View>
            <TextInput
              onChangeText={(name) => setPrefName(name)}
              placeholder="Enter screen name (the name you will seen as)"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          <View>
            <TextInput
              onChangeText={(pass) => setUserPassword(pass)}
              placeholder="Enter Password"
              returnKeyType="next"
              onSubmitEditing={() =>
                userNameInputRef.current && userNameInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <TouchableOpacity
          onPress={() => navigation.navigate ('ViewChooser')}>
            <Text>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Signup;
