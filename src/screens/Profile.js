import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const Profile = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    buildNumber: '',
    deviceId: '',
    uniqueId: '',
    systemName: DeviceInfo.getSystemName(),
    systemVersion: DeviceInfo.getSystemVersion(),
  });

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      try {
        const buildNumber = DeviceInfo.getBuildNumber();
        const deviceId = DeviceInfo.getDeviceId();
        const uniqueId = await DeviceInfo.getUniqueId();
        const systemName = DeviceInfo.getSystemName();
        const systemVersion = DeviceInfo.getSystemVersion();

        setDeviceInfo({
          buildNumber,
          deviceId,
          uniqueId,
          systemName,
          systemVersion,
        });
      } catch (error) {
        console.error(error);
      }

      fetchDeviceInfo();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>System Version: {deviceInfo.systemVersion}</Text>
      <Text style={styles.text}>System Name: {deviceInfo.systemName}</Text>
      <Text style={styles.text}>Build Number: {deviceInfo.buildNumber}</Text>
      <Text style={styles.text}>Device ID: {deviceInfo.deviceId}</Text>
      <Text style={styles.text}>Unique ID: {deviceInfo.uniqueId}</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
  },
};

export default Profile;
