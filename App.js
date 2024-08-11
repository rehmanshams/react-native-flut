import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import Profile from './src/screens/Profile';
import ScanScreen from './src/screens/Scan';
import WelcomePage from './src/screens/Welcome';
import Login from './src/screens/Login';
import SignUp from './src/screens/Sign';
import HomePage from './src/screens/Home';
import {splashScreenIcon} from './src/utils/icons';

const Stack = createStackNavigator();

const SplashScreen = () => (
  <View style={styles.mainContainer}>{splashScreenIcon}</View>
);

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
        }}>
        {showSplash ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Scan" component={ScanScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0DCDAA',
  },
});

export default App;
