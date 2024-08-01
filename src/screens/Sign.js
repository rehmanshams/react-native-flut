import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {backArrow, openPasswordEye} from '../utils/icons';

const SignUpPage = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('WelcomePage')}>
        <View style={styles.backIcon}>{backArrow}</View>
      </TouchableWithoutFeedback>
      <Text style={styles.headerText}>Create New Account</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name here"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address here"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password here"
            secureTextEntry={!passwordVisible}
            onChangeText={setPassword}
          />
          <TouchableWithoutFeedback
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <View style={styles.eyeIcon}>{openPasswordEye}</View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your confirm password here"
            secureTextEntry={!passwordVisible}
          />
          <TouchableWithoutFeedback
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <View style={styles.eyeIcon}>{openPasswordEye}</View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  backIcon: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '600',
    color: 'black',
    marginBottom: 32,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333538',
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    paddingVertical: 8,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    top: 8,
  },
  signupButton: {
    backgroundColor: '#0DCDAA',
    paddingVertical: 16,
    borderRadius: 4,
    marginTop: 32,
  },
  signupButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SignUpPage;
