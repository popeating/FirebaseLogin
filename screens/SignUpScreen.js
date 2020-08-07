import React, { useState, useContext } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { TextInput, Button } from 'react-native-paper';
import loc from '../utils/localization';
import mainContext from '../context/mainContext';

const SignUpScreen = ({ navigation }) => {
  const { handleSignup } = useContext(mainContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(mainContext);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email address"
            onChangeText={(name) => setName(name)}
            value={name}
            label={loc.t('nome')}
            mode="outlined"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email address"
            onChangeText={(email) => setEmail(email)}
            value={email}
            label="Email"
            keyboardType={'email-address'}
            mode="outlined"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            value={password}
            secureTextEntry={true}
            label="Password"
            mode="outlined"
          />
        </View>

        <Button
          mode="contained"
          icon="login"
          onPress={() => handleSignup(email, password)}
        >
          {loc.t('signupButton')}
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUpScreen;
