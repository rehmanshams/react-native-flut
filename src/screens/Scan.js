import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const App = () => {
  const [data, setData] = useState('Scan Something');
  return (
    <QRCodeScanner
      onRead={({data}) => setData(data)}
      reactivate={true}
      reactivateTimeout={500}
      showMarker={true}
      topContent={
        <View>
          <Text
            style={{
              color: 'black',
              padding: 20,
              fontSize: 20,
              backgroundColor: 'grey',
              margin: 10,
            }}>
            {data}
          </Text>
        </View>
      }
      bottomContent={
        <View>
          <Text>Qr Code Scanner</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default App;
