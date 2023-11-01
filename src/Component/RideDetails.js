
import React, { useState ,useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity ,Dimensions,ScrollView,Image} from 'react-native';
import Lottie from 'lottie-react-native';

import HomeModal from './HomeModal';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import database from '@react-native-firebase/database';
import { useRoute } from '@react-navigation/native';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import {
  PacmanIndicator,
} from 'react-native-indicators';
const initialRegion = {
  latitude: 28.3808,
  longitude: 70.3744,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const RideDetails = ({ navigation }) => {

  const route = useRoute();
  const {id} = route.params;
 console.log(route,'0000000000000000000')


  const [region, setRegion] = useState(initialRegion);
  const [loading, setLoading] = useState(false);
  const modal2Ref = React.createRef();
  const uploadDataWithLocation = async (name, userId) => {
    try {
      if (!name || !pickup || !dropoff || !price || !seat) {
        Toast.show({
          type: ALERT_TYPE.WARNING,
          textBody: 'Please fill all the fields',
        })
        return;
      }
  
      Geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
  
          const response = await database().ref(`Rider/${userId}`).push({
            name,
            pickup,
            dropoff,
            price,
            seat,
            latitude,
            longitude,
          });
  
          console.log(response);
          console.log(userId,'iddddddddd')
          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'Ride Uploaded',
            button: 'close',
          })
          
        },
        (error) => {
          console.log(error);
        
        },
        
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } catch (err) {
      console.log(err);
    }
  };
  


  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setRegion({
          ...region,
          latitude,
          longitude,
        });
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);




  
  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 5 seconds delay
  };
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [price, setPrice] = useState('');
  const [seat, setSeats] = useState('');
  const [name, setName] = useState('');

















  
  return (
    <AlertNotificationRoot>
    <View style={styles.container}>

     <ScrollView>
      {/* Header */}
      <View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' ,marginLeft:25}}>
        <View style={{}}>
          <Lottie
            style={{
          
              height: 50,
              alignSelf: 'center',
              width: 50,
            }}
            source={require('../../assets/boy.json')}
            autoPlay
            loop
          />
        </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white',marginLeft:10 }}>Ride Details</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
      {/* Header */}
      <View style={{ padding: 20 }}>
        <Text style={styles.label}>Pick-up Address</Text>
        <TextInput
          style={styles.input}
          value={pickup}
          onChangeText={(text) => setPickup(text)}
        />

        <Text style={styles.label}>Drop-off Address</Text>
        <TextInput
          style={styles.input}
          value={dropoff}
          onChangeText={(text) => setDropoff(text)}
        />
        <Text style={styles.label}>Price</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={(text) => setPrice(text)}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Available Seats</Text>
        <TextInput
          style={styles.input}
          value={seat}
          onChangeText={(text) => setSeats(text)}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Your Name</Text>
<TextInput
  style={styles.input}
  value={name}
  onChangeText={(text) => setName(text)}
/>

    
      <Text style={styles.label}>Give Current Location</Text>
      <TouchableOpacity  onPress={() => {
                      modal2Ref.current.toggleModal();
                    }}>
      <Text    style={[styles.input,{textAlign:'center',backgroundColor:'green',color:'white'}]}>
        
     
        Press to give your location
        </Text>
        </TouchableOpacity>
    <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
           
          }}>









          <TouchableOpacity
          style={{
            borderRadius: 15,
            borderWidth: 0.1,
            width: 200,
            height: 50,
            backgroundColor: '#043927',
            justifyContent: 'center',
          }}
             onPress={() => {
    uploadDataWithLocation(name);
    handleSubmit()

  }}
>
  {/* {loading==false? (
    <Text
    style={{textAlign: 'center',color:'#fff', elevation: 100, fontSize:19}}>
    Submit
  </Text>
   ) : (
     <PacmanIndicator
       size={50}

       color="white"
     />
   )} */}

{loading ? (
        <PacmanIndicator size={50} color="white" />
      ) : (
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            elevation: 100,
            fontSize: 19,
          }}
        >
          Submit
        </Text>
      )}
            
            
            
           
          </TouchableOpacity>
          
        </View>
        </View>
        <HomeModal
        view={
          <View style={styles.container2}>
          <MapView
            style={styles.map}
            region={region}
            showsUserLocation={true}
            showsMyLocationButton={true}
          >
            <Marker
              coordinate={{ latitude: region.latitude, longitude: region.longitude }}
              title="Current Location"
            />
          </MapView>
        </View>
        }
        ref={modal2Ref}
      />
      </ScrollView>

   
    </View>
    </AlertNotificationRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  label:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    marginBottom:10
  },
  input: {
    borderRadius: 10,
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: '#0077C9',
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default RideDetails;