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
    };

    fetchDeviceInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Device Information</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>System Version:</Text>
        <Text style={styles.text}> {deviceInfo.systemVersion}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>System Name:</Text>
        <Text style={styles.text}> {deviceInfo.systemName}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Build Number:</Text>
        <Text style={styles.text}> {deviceInfo.buildNumber}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Device ID:</Text>
        <Text style={styles.text}> {deviceInfo.deviceId}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Unique ID:</Text>
        <Text style={styles.text}> {deviceInfo.uniqueId}</Text>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 2,
  },
};

export default Profile;
