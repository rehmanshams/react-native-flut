import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Switch,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const Stack = createStackNavigator();

const SplashScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Svg
        width="119"
        height="56"
        viewBox="0 0 119 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M32.2578 19.1153C31.149 19.1153 30.0032 19.1153 28.8205 19.1153C27.6624 19.1153 26.5043 19.1153 25.3461 19.1153C23.6952 19.1153 22.303 19.1153 21.1696 19.1153C20.0608 19.1153 18.9396 19.1153 17.8061 19.1153C17.8061 19.9285 17.7938 20.988 17.7692 22.294C17.7692 23.5999 17.7692 24.8442 17.7692 26.027C19.223 26.027 20.8369 26.027 22.611 26.027C24.4098 26.027 25.2599 26.027 25.1613 26.027C24.7425 26.027 25.4201 26.027 27.1942 26.027C28.993 26.027 30.5576 26.027 31.8882 26.027V36.5978C30.6562 36.5978 29.0422 36.5978 27.0463 36.5978C25.0505 36.5978 24.3728 36.5978 25.0135 36.5978C25.3585 36.5978 24.6562 36.5978 22.9067 36.5978C21.1819 36.5978 19.6788 36.5978 18.3975 36.5978C18.3975 38.2241 18.4098 41.0454 18.4345 45.0618C18.4591 49.0782 18.4591 52.2076 18.4345 54.4499H0.286718C0.286718 52.8729 0.286718 49.4971 0.286718 44.3226C0.311359 39.1234 0.323679 34.2693 0.323679 29.76C0.323679 26.5321 0.311359 22.6389 0.286718 18.0804C0.286718 13.5219 0.286718 9.14822 0.286718 4.95933C1.29698 4.95933 3.36679 4.95933 6.49613 4.95933C9.62548 4.95933 12.9027 4.95933 16.3277 4.95933C18.841 4.95933 21.7486 4.95933 25.0505 4.95933C28.3523 4.95933 30.7547 4.95933 32.2578 4.95933V19.1153ZM51.1818 54.4499H34.4385C34.4385 52.1336 34.4385 49.263 34.4385 45.838C34.4632 42.3883 34.4755 36.0434 34.4755 26.8032C34.4755 20.3473 34.4632 14.8771 34.4385 10.3926C34.4385 5.88335 34.4385 2.5076 34.4385 0.265306H51.1818C51.1818 2.53224 51.1694 5.80943 51.1448 10.0969C51.1448 14.3597 51.1448 20.0024 51.1448 27.0249C51.1448 34.3185 51.1448 39.9489 51.1448 43.916C51.1694 47.8585 51.1818 51.3698 51.1818 54.4499ZM89.3992 54.4499H73.8018V52.3801L73.6909 52.3061C72.4342 53.0946 70.7833 53.8092 68.7381 54.4499C66.7176 55.0905 64.8326 55.4108 63.0831 55.4108C60.1509 55.4108 57.8717 54.4129 56.2454 52.417C54.6438 50.4211 53.8429 47.8708 53.8429 44.7661C53.8429 42.3021 53.8429 40.1707 53.8429 38.3719C53.8429 36.5485 53.8429 35.0208 53.8429 33.7888C53.8429 31.8668 53.8429 28.9223 53.8429 24.9551C53.8429 20.9634 53.8429 18.1051 53.8429 16.3802H70.1057C70.1057 17.3166 70.1057 18.7827 70.1057 20.7786C70.1057 22.7744 70.1057 25.3247 70.1057 28.4294C70.1057 30.4993 70.1057 32.5937 70.1057 34.7128C70.1057 36.8072 70.1057 38.4212 70.1057 39.5547C70.1057 41.2548 70.1673 42.4006 70.2905 42.992C70.4137 43.5834 70.734 43.8791 71.2515 43.8791C71.5472 43.8791 71.8798 43.8051 72.2494 43.6573C72.6437 43.4848 72.9394 43.2877 73.1365 43.0659C73.1365 42.5731 73.1365 40.9099 73.1365 38.0762C73.1365 35.2426 73.1365 32.9879 73.1365 31.3124C73.1365 28.7744 73.1365 25.8915 73.1365 22.6636C73.1365 19.411 73.1365 17.3166 73.1365 16.3802H89.3992C89.3992 17.8587 89.3869 20.372 89.3623 23.9202C89.3623 27.4438 89.3623 31.1769 89.3623 35.1194C89.3623 39.4314 89.3623 43.0413 89.3623 45.9489C89.3869 48.8565 89.3992 51.6901 89.3992 54.4499ZM118.672 43.1768L117.416 54.8195C116.849 54.8687 116.307 54.8934 115.789 54.8934C115.272 54.918 113.941 54.9304 111.797 54.9304C106.229 54.9304 101.904 53.8462 98.8242 51.6778C95.7442 49.5094 94.2041 45.8626 94.2041 40.7374C94.2041 37.1892 94.2041 34.5649 94.2041 32.8647C94.2288 31.1399 94.2411 29.5999 94.2411 28.2446H90.3972V16.3802H94.2781V5.40286H110.873V16.3802H118.192V28.2446H110.873C110.873 28.9592 110.873 29.5876 110.873 30.1296C110.873 30.6717 110.873 31.3124 110.873 32.0516C110.873 32.9633 110.873 33.7518 110.873 34.4171C110.873 35.0578 110.873 35.9325 110.873 37.0413C110.873 39.3329 111.28 40.9345 112.093 41.8462C112.906 42.7579 114.791 43.2138 117.748 43.2138C117.995 43.2138 118.167 43.2138 118.266 43.2138C118.389 43.1891 118.524 43.1768 118.672 43.1768Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentView, setCurrentView] = useState('getStarted');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Please enter both email and password.');
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const renderData = () => {
    switch (currentView) {
      case 'getStarted':
        return (
          <View style={{marginVertical: 20}}>
            <Text
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'center',
              }}>
              Welcome!
            </Text>
            <Text
              style={{fontSize: 16, fontWeight: 'normal', textAlign: 'center'}}>
              Sign up or create another account
            </Text>
            <Image
              source={require('./assets/images/welcomeImage.png')}
              style={{marginVertical: 30}}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#0DCDAA',
                paddingVertical: 10,
                borderRadius: 4,
              }}
              onPress={() => setCurrentView('loginPage')}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                paddingVertical: 10,
                borderRadius: 4,
                marginTop: 10,
                borderColor: '#7C7C7C',
                borderWidth: 1,
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 4,
              }}
              onPress={() => setCurrentView('signup')}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#7C7C7C',
                  fontWeight: 'bold',
                }}>
                No account yet?
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#0DCDAA',
                  fontWeight: 'bold',
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        );
      case 'loginPage':
        return (
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: 1,
              paddingVertical: 40,
            }}>
            <View>
              <TouchableWithoutFeedback
                onPress={() => setCurrentView('getStarted')}>
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M19 12H5"
                    stroke="#333538"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M12 19L5 12L12 5"
                    stroke="#333538"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
              </TouchableWithoutFeedback>
              <Text
                style={{
                  fontSize: 32,
                  fontWeight: 'semibold',
                  color: 'black',
                  marginTop: 23,
                }}>
                Welcome Back!
              </Text>
              <View style={{marginTop: 40}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'normal',
                    color: '#333538',
                    marginTop: 10,
                  }}>
                  Email Address
                </Text>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    placeholderTextColor: 'rgba(0, 0, 0, 0.1)',
                  }}
                  placeholder="Enter your email address here"
                  keyboardType="email-address"
                  onChangeText={setEmail}
                  value={email}
                />
              </View>
              <View style={{marginTop: 10}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'normal',
                    color: '#333538',
                    marginTop: 10,
                  }}>
                  Password
                </Text>
                <View style={{position: 'relative'}}>
                  <TextInput
                    style={{
                      borderBottomWidth: 1,
                      borderColor: 'rgba(0, 0, 0, 0.1)',
                      placeholderTextColor: 'rgba(0, 0, 0, 0.1)',
                    }}
                    placeholder="Enter your password here"
                    secureTextEntry={!passwordVisible}
                    onChangeText={setPassword}
                    // secureTextEntry
                    // value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                    <Svg
                      style={{position: 'absolute', right: 0, top: 14}}
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <G clipPath="url(#clip0_638_81)">
                        <Path
                          d="M9.5 3.90395C4.25 3.90395 1.25 9.90395 1.25 9.90395C1.25 9.90395 4.25 15.9039 9.5 15.9039C14.75 15.9039 17.75 9.90395 17.75 9.90395C17.75 9.90395 14.75 3.90395 9.5 3.90395Z"
                          stroke="#C0BCBC"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <Path
                          d="M9.5 12.1539C10.7426 12.1539 11.75 11.1466 11.75 9.90395C11.75 8.66131 10.7426 7.65395 9.5 7.65395C8.25736 7.65395 7.25 8.66131 7.25 9.90395C7.25 11.1466 8.25736 12.1539 9.5 12.1539Z"
                          stroke="#C0BCBC"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </G>
                      <Defs>
                        <ClipPath id="clip0_638_81">
                          <Rect
                            width="18"
                            height="18"
                            fill="white"
                            transform="translate(0.5 0.903946)"
                          />
                        </ClipPath>
                      </Defs>
                    </Svg>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  marginTop: 16,
                  justifyContent: 'center',
                }}>
                <Text>Remember Me</Text>
                <Switch
                  trackColor={{false: '#767577', true: '#0DCDAA'}}
                  thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={{marginTop: -24}}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#0DCDAA',
                paddingVertical: 16,
                borderRadius: 4,
              }}
              onPress={handleLogin}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        );
      case 'signup':
        return (
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: 1,
              paddingVertical: 40,
            }}>
            <View>
              <TouchableWithoutFeedback
                onPress={() => setCurrentView('getStarted')}>
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M19 12H5"
                    stroke="#333538"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M12 19L5 12L12 5"
                    stroke="#333538"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
              </TouchableWithoutFeedback>
              <Text
                style={{
                  fontSize: 32,
                  fontWeight: 'semibold',
                  color: 'black',
                  marginTop: 23,
                }}>
                Create New Account
              </Text>
              <View style={{marginTop: 40}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'normal',
                    color: '#333538',
                    marginTop: 10,
                  }}>
                  Name
                </Text>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    placeholderTextColor: 'rgba(0, 0, 0, 0.1)',
                  }}
                  placeholder="Enter your full name here"
                  keyboardType="default"
                />
              </View>
              <View style={{marginTop: 10}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'normal',
                    color: '#333538',
                    marginTop: 10,
                  }}>
                  Email Address
                </Text>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    placeholderTextColor: 'rgba(0, 0, 0, 0.1)',
                  }}
                  placeholder="Enter your email address here"
                  keyboardType="email-address"
                />
              </View>
              <View style={{marginTop: 10}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'normal',
                    color: '#333538',
                    marginTop: 10,
                  }}>
                  Password
                </Text>
                <View style={{position: 'relative'}}>
                  <TextInput
                    style={{
                      borderBottomWidth: 1,
                      borderColor: 'rgba(0, 0, 0, 0.1)',
                      placeholderTextColor: 'rgba(0, 0, 0, 0.1)',
                    }}
                    placeholder="Enter your password here"
                    secureTextEntry={!passwordVisible}
                    onChangeText={setPassword}
                    // secureTextEntry
                    // value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                    <Svg
                      style={{position: 'absolute', right: 0, top: 14}}
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <G clipPath="url(#clip0_638_81)">
                        <Path
                          d="M9.5 3.90395C4.25 3.90395 1.25 9.90395 1.25 9.90395C1.25 9.90395 4.25 15.9039 9.5 15.9039C14.75 15.9039 17.75 9.90395 17.75 9.90395C17.75 9.90395 14.75 3.90395 9.5 3.90395Z"
                          stroke="#C0BCBC"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <Path
                          d="M9.5 12.1539C10.7426 12.1539 11.75 11.1466 11.75 9.90395C11.75 8.66131 10.7426 7.65395 9.5 7.65395C8.25736 7.65395 7.25 8.66131 7.25 9.90395C7.25 11.1466 8.25736 12.1539 9.5 12.1539Z"
                          stroke="#C0BCBC"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </G>
                      <Defs>
                        <ClipPath id="clip0_638_81">
                          <Rect
                            width="18"
                            height="18"
                            fill="white"
                            transform="translate(0.5 0.903946)"
                          />
                        </ClipPath>
                      </Defs>
                    </Svg>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View style={{marginTop: 10}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'normal',
                    color: '#333538',
                    marginTop: 10,
                  }}>
                  Confirm Password
                </Text>
                <View style={{position: 'relative'}}>
                  <TextInput
                    style={{
                      borderBottomWidth: 1,
                      borderColor: 'rgba(0, 0, 0, 0.1)',
                      placeholderTextColor: 'rgba(0, 0, 0, 0.1)',
                    }}
                    placeholder="Enter your confirm password here"
                    secureTextEntry={!passwordVisible}
                    onChangeText={setPassword}
                    // secureTextEntry
                    // value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                    <Svg
                      style={{position: 'absolute', right: 0, top: 14}}
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <G clipPath="url(#clip0_638_81)">
                        <Path
                          d="M9.5 3.90395C4.25 3.90395 1.25 9.90395 1.25 9.90395C1.25 9.90395 4.25 15.9039 9.5 15.9039C14.75 15.9039 17.75 9.90395 17.75 9.90395C17.75 9.90395 14.75 3.90395 9.5 3.90395Z"
                          stroke="#C0BCBC"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <Path
                          d="M9.5 12.1539C10.7426 12.1539 11.75 11.1466 11.75 9.90395C11.75 8.66131 10.7426 7.65395 9.5 7.65395C8.25736 7.65395 7.25 8.66131 7.25 9.90395C7.25 11.1466 8.25736 12.1539 9.5 12.1539Z"
                          stroke="#C0BCBC"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </G>
                      <Defs>
                        <ClipPath id="clip0_638_81">
                          <Rect
                            width="18"
                            height="18"
                            fill="white"
                            transform="translate(0.5 0.903946)"
                          />
                        </ClipPath>
                      </Defs>
                    </Svg>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#0DCDAA',
                paddingVertical: 16,
                borderRadius: 4,
              }}
              onPress={() => setCurrentView('loginPage')}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderData()}
      {/* <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} /> */}
    </View>
  );
};

const HomePage = () => {
  const [likeButton, setLikeButton] = useState(false);

  const eventData = [
    {
      date: 'Thu, Apr 19 · 20.00 PM',
      title: 'The Kooks',
      location: 'Razzmatazz',
      image: require('./assets/images/kooksHomeImage.png'),
    },
    {
      date: 'Thu, Apr 19 · 20.00 PM',
      title: 'The Kooks',
      location: 'Razzmatazz',
      image: require('./assets/images/kooksHomeImage.png'),
    },
    {
      date: 'Thu, Apr 19 · 20.00 PM',
      title: 'The Kooks',
      location: 'Razzmatazz',
      image: require('./assets/images/kooksHomeImage.png'),
    },
    {
      date: 'Thu, Apr 19 · 20.00 PM',
      title: 'The Kooks',
      location: 'Razzmatazz',
      image: require('./assets/images/kooksHomeImage.png'),
    },
  ];

  return (
    <View>
      <View style={{paddingHorizontal: 20}}>
        <Text style={{paddingTop: 24, fontWeight: 'normal', fontSize: 12}}>
          Find events in
        </Text>
        <View
          style={{
            paddingTop: 24,
            // fontWeight: 'normal',
            // fontSize: 12,
            display: 'flex',
            gap: 4,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <G clipPath="url(#clip0_31_564)">
              <Path
                d="M7 13.9846C7 13.9846 12.25 10.4846 12.25 6.40125C12.25 5.00886 11.6969 3.6735 10.7123 2.68893C9.72774 1.70437 8.39239 1.15125 7 1.15125C5.60761 1.15125 4.27226 1.70437 3.28769 2.68893C2.30312 3.6735 1.75 5.00886 1.75 6.40125C1.75 10.4846 7 13.9846 7 13.9846Z"
                stroke="#262627"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M7 8.15125C7.9665 8.15125 8.75 7.36774 8.75 6.40125C8.75 5.43475 7.9665 4.65125 7 4.65125C6.0335 4.65125 5.25 5.43475 5.25 6.40125C5.25 7.36774 6.0335 8.15125 7 8.15125Z"
                stroke="#333538"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </G>
            <Defs>
              <ClipPath id="clip0_31_564">
                <Rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(0 0.567871)"
                />
              </ClipPath>
            </Defs>
          </Svg>
          <Text style={{fontSize: 18, fontWeight: 'semibold'}}>Barcelona</Text>
          <Svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M5.10486 7.31787L9.60486 11.8179L14.1049 7.31787"
              stroke="#262627"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </View>
        <Text style={{paddingTop: 20, fontSize: 16, fontWeight: 400}}>
          Popular in Barcelona
        </Text>
        <Image
          source={require('./assets/images/homePageHeaderImage.png')}
          style={{marginTop: 30, width: '100%'}}
        />
        <View
          style={{
            // width: '',
            backgroundColor: '#F2F2F2', // Light gray color
            paddingHorizontal: 16,
            paddingVertical: 10,
            display: 'flex',
            gap: 4,
            flexDirection: 'column',
            borderWidth: 1,
            borderTopWidth: 0,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <Text style={{fontWeight: 'normal', fontSize: 12}}>
            Mon, Apr 18 · 21:00 Pm{' '}
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>La Rosalia</Text>
          <View
            style={{
              display: 'flex',
              gap: 4,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <G clipPath="url(#clip0_31_564)">
                <Path
                  d="M7 13.9846C7 13.9846 12.25 10.4846 12.25 6.40125C12.25 5.00886 11.6969 3.6735 10.7123 2.68893C9.72774 1.70437 8.39239 1.15125 7 1.15125C5.60761 1.15125 4.27226 1.70437 3.28769 2.68893C2.30312 3.6735 1.75 5.00886 1.75 6.40125C1.75 10.4846 7 13.9846 7 13.9846Z"
                  stroke="#262627"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M7 8.15125C7.9665 8.15125 8.75 7.36774 8.75 6.40125C8.75 5.43475 7.9665 4.65125 7 4.65125C6.0335 4.65125 5.25 5.43475 5.25 6.40125C5.25 7.36774 6.0335 8.15125 7 8.15125Z"
                  stroke="#333538"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_31_564">
                  <Rect
                    width="14"
                    height="14"
                    fill="white"
                    transform="translate(0 0.567871)"
                  />
                </ClipPath>
              </Defs>
            </Svg>
            <Text style={{fontWeight: 'normal', fontSize: 12}}>
              Palau Sant Jordi, Barcelona
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            marginTop: 20,
          }}>
          {eventData.map((event, index) => (
            <View
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  display: 'flex',
                  gap: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={event.image}
                  style={{marginTop: 0, borderRadius: 8}}
                />
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    marginTop: 20,
                  }}>
                  <Text style={{fontWeight: 'normal', fontSize: 12}}>
                    {event.date}
                  </Text>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>
                    {event.title}
                  </Text>
                  <View
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'row',
                      gap: 4,
                    }}>
                    <Svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <G clipPath="url(#clip0_31_564)">
                        <Path
                          d="M7 13.9846C7 13.9846 12.25 10.4846 12.25 6.40125C12.25 5.00886 11.6969 3.6735 10.7123 2.68893C9.72774 1.70437 8.39239 1.15125 7 1.15125C5.60761 1.15125 4.27226 1.70437 3.28769 2.68893C2.30312 3.6735 1.75 5.00886 1.75 6.40125C1.75 10.4846 7 13.9846 7 13.9846Z"
                          stroke="#262627"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <Path
                          d="M7 8.15125C7.9665 8.15125 8.75 7.36774 8.75 6.40125C8.75 5.43475 7.9665 4.65125 7 4.65125C6.0335 4.65125 5.25 5.43475 5.25 6.40125C5.25 7.36774 6.0335 8.15125 7 8.15125Z"
                          stroke="#333538"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </G>
                      <Defs>
                        <ClipPath id="clip0_31_564">
                          <Rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0 0.567871)"
                          />
                        </ClipPath>
                      </Defs>
                    </Svg>
                    <Text style={{fontWeight: 'normal', fontSize: 12}}>
                      {event.location}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  gap: 16,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity onPress={() => setLikeButton(!likeButton)}>
                  <Svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill={likeButton ? 'red' : 'white'}
                    xmlns="http://www.w3.org/2000/svg">
                    <G clipPath="url(#clip0_650_340)">
                      <Path
                        d="M14.9857 2.56284C15.4863 2.77026 15.9411 3.07428 16.3242 3.45753C16.7074 3.84059 17.0114 4.29542 17.2188 4.79601C17.4263 5.2966 17.533 5.83316 17.533 6.37503C17.533 6.91689 17.4263 7.45345 17.2188 7.95404C17.0114 8.45464 16.7074 8.90946 16.3242 9.29253L15.5292 10.0875L9.69415 15.9225L3.85915 10.0875L3.06415 9.29253C2.29038 8.51876 1.85568 7.4693 1.85568 6.37503C1.85568 5.28075 2.29038 4.2313 3.06415 3.45753C3.83792 2.68376 4.88738 2.24906 5.98165 2.24906C7.07593 2.24906 8.12538 2.68376 8.89915 3.45753L9.69415 4.25253L10.4892 3.45753C10.8722 3.07428 11.327 2.77026 11.8276 2.56284C12.3282 2.35542 12.8648 2.24866 13.4067 2.24866C13.9485 2.24866 14.4851 2.35542 14.9857 2.56284Z"
                        stroke={likeButton ? 'red' : '#7C7C7C'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </G>
                    <Defs>
                      <ClipPath id="clip0_650_340">
                        <Rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0.694153)"
                        />
                      </ClipPath>
                    </Defs>
                  </Svg>
                </TouchableOpacity>

                <Svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M14.1942 6C15.4368 6 16.4442 4.99264 16.4442 3.75C16.4442 2.50736 15.4368 1.5 14.1942 1.5C12.9515 1.5 11.9442 2.50736 11.9442 3.75C11.9442 4.99264 12.9515 6 14.1942 6Z"
                    stroke="#7C7C7C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M5.19415 11.25C6.43679 11.25 7.44415 10.2426 7.44415 9C7.44415 7.75736 6.43679 6.75 5.19415 6.75C3.95151 6.75 2.94415 7.75736 2.94415 9C2.94415 10.2426 3.95151 11.25 5.19415 11.25Z"
                    stroke="#7C7C7C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M14.1942 16.5C15.4368 16.5 16.4442 15.4926 16.4442 14.25C16.4442 13.0074 15.4368 12 14.1942 12C12.9515 12 11.9442 13.0074 11.9442 14.25C11.9442 15.4926 12.9515 16.5 14.1942 16.5Z"
                    stroke="#7C7C7C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M7.13666 10.1324L12.2592 13.1174"
                    stroke="#7C7C7C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M12.2517 4.88245L7.13666 7.86745"
                    stroke="#7C7C7C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View
        style={{
          width: '100%',
          position: 'sticky',
          bottom: -24,
          backgroundColor: 'gray',
          paddingHorizontal: 24,
          paddingVertical: 20,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Svg
          width="24"
          height="27"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M12 2.43896L3 10.1219V22.1951C3 22.7772 3.21071 23.3356 3.58579 23.7472C3.96086 24.1589 4.46957 24.3902 5 24.3902H19C19.5304 24.3902 20.0391 24.1589 20.4142 23.7472C20.7893 23.3356 21 22.7772 21 22.1951V10.1219L12 2.43896Z"
            stroke="#333538"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M9 24.3902V13.4146H15V24.3902"
            stroke="#333538"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
        <Svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M11 19.2439C15.4183 19.2439 19 15.6622 19 11.2439C19 6.82562 15.4183 3.2439 11 3.2439C6.58172 3.2439 3 6.82562 3 11.2439C3 15.6622 6.58172 19.2439 11 19.2439Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M21 21.2438L16.65 16.8938"
            stroke="#BDBDBD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
        <Svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M2,13 L2,11 L22,11 L22,13 L2,13 Z M16,22 L16,20 L20,20 L20,16 L22,16 L22,20 C22,21.1045695 21.1859723,22 20.1818182,22 L16,22 Z M8,22 L3.81818182,22 C2.81402773,22 2,21.1045695 2,20 L2,16 L4,16 L4,20 L8,20 L8,22 Z M16,2 L20.1818182,2 C21.1859723,2 22,2.8954305 22,4 L22,8 L20,8 L20,4 L16,4 L16,2 Z M8,2 L8,4 L4,4 L4,8 L2,8 L2,4 C2,2.8954305 2.81402773,2 3.81818182,2 L8,2 Z"
          />
        </Svg>
        <Svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M19.0554 3.6611C19.7228 3.93766 20.3292 4.34302 20.84 4.85401C21.351 5.36477 21.7563 5.9712 22.0329 6.63866C22.3095 7.30612 22.4518 8.02153 22.4518 8.74401C22.4518 9.4665 22.3095 10.1819 22.0329 10.8494C21.7563 11.5168 21.351 12.1233 20.84 12.634L19.78 13.694L12 21.474L4.22 13.694L3.16 12.634C2.1283 11.6023 1.54871 10.203 1.54871 8.74401C1.54871 7.28498 2.1283 5.88571 3.16 4.85401C4.19169 3.82232 5.59096 3.24272 7.05 3.24272C8.50903 3.24272 9.9083 3.82232 10.94 4.85401L12 5.91401L13.06 4.85401C13.5708 4.34302 14.1772 3.93766 14.8446 3.6611C15.5121 3.38453 16.2275 3.24219 16.95 3.24219C17.6725 3.24219 18.3879 3.38453 19.0554 3.6611Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
        <Svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M20 21.2439V19.2439C20 18.183 19.5786 17.1656 18.8284 16.4155C18.0783 15.6653 17.0609 15.2439 16 15.2439H8C6.93913 15.2439 5.92172 15.6653 5.17157 16.4155C4.42143 17.1656 4 18.183 4 19.2439V21.2439"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M12 11.2439C14.2091 11.2439 16 9.45304 16 7.2439C16 5.03476 14.2091 3.2439 12 3.2439C9.79086 3.2439 8 5.03476 8 7.2439C8 9.45304 9.79086 11.2439 12 11.2439Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      </View>
    </View>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {showSplash ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomePage} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0DCDAA',
    width: '100%',
  },
  text: {
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginVertical: 10,
  },
});

export default App;
