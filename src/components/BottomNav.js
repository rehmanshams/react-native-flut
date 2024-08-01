import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {
  bottomNavHomeIcon,
  bottomNavLikeIcon,
  bottomNavProfileIcon,
  bottomNavSearchIcon,
  bottomNavigationScanIcon,
} from '../utils/icons';

const BottomNav = ({navigation}) => {
  return (
    <View style={styles.bottomNavigation}>
      <View>{bottomNavHomeIcon}</View>
      <View>{bottomNavSearchIcon}</View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Scan')}>
        <View>{bottomNavigationScanIcon}</View>
      </TouchableWithoutFeedback>
      <View>{bottomNavLikeIcon}</View>
      <View>{bottomNavProfileIcon}</View>
    </View>
  );
};

const styles = {
  bottomNavigation: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'gray',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export default BottomNav;
