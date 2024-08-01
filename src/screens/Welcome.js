import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Sign up or create another account</Text>
      <Image
        source={require('../../assets/welcomeImage.png')}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.noAccountText}>No account yet?{" "}</Text>
        <Text style={styles.signUpText}> Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    marginVertical: 30,
  },
  signInButton: {
    backgroundColor: '#0DCDAA',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 10,
    borderColor: '#7C7C7C',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  noAccountText: {
    color: '#7C7C7C',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUpText: {
    color: '#0DCDAA',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Welcome;
