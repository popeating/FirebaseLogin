import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Dimensions, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';
import * as Linking from 'expo-linking';

import * as Location from 'expo-location';

import { Text, Button } from 'react-native-paper';
import { color } from 'react-native-reanimated';

import loc from '../utils/localization';

const Notification = (props) => {
  goDirections = (lat, long) => {
    let daddr = encodeURIComponent(+lat + ', ' + long);
    console.log(daddr);
    if (Platform.OS === 'ios') {
      Linking.openURL('http://maps.apple.com/?daddr=' + daddr);
    } else {
      Linking.openURL('http://maps.google.com/?daddr=' + daddr);
    }
  };

  const [region, setRegion] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  let mapRef = useRef(null);
  //console.log(location);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        latitudeDelta: 0.011,
        longitudeDelta: 0.0111,
      });
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>{loc.t('mappa')}</Text>
      {region ? (
        <MapView initialRegion={region} style={styles.mapppy}>
          <Marker
            coordinate={{
              latitude: 43.768234,
              longitude: 11.297736,
            }}
            image={require('../assets/pin.png')}
            flat={true}
            title={'Lupo Brizio'}
          >
            <Callout
              tooltip={true}
              onPress={() => goDirections('43.768234', '11.297736')}
            >
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>LUPO BRIZIO</Text>
                <Text style={{ color: '#adadad' }}>Clicca per navigare</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
      ) : (
        <Text>Waiting</Text>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  htmltext: {
    fontSize: 20,
  },
  mapppy: {
    width: Dimensions.get('window').width - 50,
    height: Dimensions.get('window').height / 3,
  },
  callout: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 8,
    borderRadius: 5,
  },
  calloutTitle: { fontSize: 18, fontWeight: '700', color: 'red' },
});
export default Notification;
