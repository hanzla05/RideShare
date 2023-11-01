import { View, Text , StyleSheet} from 'react-native'
import React, { useState, useEffect } from 'react'
import Geolocation from '@react-native-community/geolocation'
import MapView, { PROVIDER_GOOGLE , Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Map = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const fullNameValue = await AsyncStorage.getItem('fullName');
      const phoneNumberValue = await AsyncStorage.getItem('phoneNumber');
      const emailValue = await AsyncStorage.getItem('email');

      if (fullNameValue) {
        setFullName(fullNameValue);
      }
      if (phoneNumberValue) {
        setPhoneNumber(phoneNumberValue);
      }
      if (emailValue) {
        setEmail(emailValue);
      }
    };

    fetchUserData();
  }, []);

  const [currentlocation , setCurrentLocation] = useState({
    latitude: 28.3808,
    longitude: 70.3744,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      data => {
        setCurrentLocation(data.coords);
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <View style={{ borderWidth: 1, borderColor: '#636363' }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: currentlocation.latitude,
          longitude: currentlocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          coordinate={{
            latitude: currentlocation.latitude,
            longitude: currentlocation.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          pinColor={'red'}
          title={fullName}
          description={'Current Location'}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 470,
  },
});

export default Map;
