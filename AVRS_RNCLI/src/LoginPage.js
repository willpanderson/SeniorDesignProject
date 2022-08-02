/* eslint-disable no-alert */
import React, {useState} from 'react';
import {auth} from '../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';

import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';

const LoginPage = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('LoginPage ' + userCredential.user.email);
        props.logInChange();
      })
      .catch(error => alert(error.message));
  };

  return (
    <View>
      <TextInput
        style={styles.phoneInput}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="Email"
        autoCapitalize="none"
        autoFocus={true}
      />

      <TextInput
        style={styles.phoneInput}
        value={password}
        onChangeText={setPassword}
        keyboardType="default"
        placeholder="Password"
        // placeholderTextColor={'dimgray'}
        secureTextEntry
      />

      <Pressable
        style={({pressed}) => [styles.button, pressed ? {opacity: 0.8} : {}]}
        onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneInput: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B6C7CC',
    width: 200,
    height: 50,
    borderRadius: 10,
    margin: 15,
    padding: 10,
    bottom: 100,
  },
  verify: {
    width: 200,
    height: 50,
    backgroundColor: '#05111B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 15,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#05111B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 15,
  },
  buttonText: {
    color: '#DBDDDF',
  },
});

export default LoginPage;
