import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Switch,
  Alert,
  StyleSheet,
} from 'react-native';
import {backArrow, openPasswordEye} from '../utils/icons';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(prevState => !prevState);

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Please enter both email and password');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('WelcomePage')}>
          <View style={styles.backIcon}>{backArrow}</View>
        </TouchableWithoutFeedback>
        <Text style={styles.headerText}>Welcome Back!</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address here"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
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
              value={password}
            />
            <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
              <View style={styles.eyeIcon}>{openPasswordEye}</View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Remember Me</Text>
          <Switch
            trackColor={{false: '#767577', true: '#0DCDAA'}}
            thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  backIcon: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '600',
    color: 'black',
    marginTop: 23,
  },
  inputContainer: {
    marginTop: 20,
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
    color: 'black',
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    top: 8,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  switchText: {
    color: 'black',
  },
  loginButton: {
    backgroundColor: '#0DCDAA',
    paddingVertical: 16,
    borderRadius: 4,
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Login;
