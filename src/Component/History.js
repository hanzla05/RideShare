
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator, Image, TextInput, ToastAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import database from '@react-native-firebase/database';
import HomeModal from './HomeModal';
import Lottie from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};



const History = ({ navigation }) => {
  const modal2Ref = React.createRef();
  const modalRef = React.createRef();

  const [Mapname, setMapname] = useState('')
  const [show, setshow] = useState(true)
  const [rides, setRides] = useState([]);
  const [selectedRide, setSelectedRide] = useState();
  const [showMap, setShowMap] = useState(false);
  const [region, setRegion] = useState(initialRegion);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    const todoRef = database().ref("Rider/undefined");
    todoRef
      .orderByChild("pickup")
      .startAt(text)
      .endAt(text + "\uf8ff")
      .on("value", (pickupSnapshot) => {
        todoRef
          .orderByChild("dropoff")
          .startAt(text)
          .endAt(text + "\uf8ff")
          .on("value", (dropoffSnapshot) => {
            const rides = [];
            pickupSnapshot.forEach((childSnapshot) => {
              const ride = childSnapshot.val();
              ride.key = childSnapshot.key;
              rides.push(ride);
            });
            dropoffSnapshot.forEach((childSnapshot) => {
              const ride = childSnapshot.val();
              ride.key = childSnapshot.key;
              if (!rides.some((r) => r.key === ride.key)) {
                // Avoid duplicate rides
                rides.push(ride);
              }
            });
            setRides(rides);
            setshow(false);
          });
      });
  };
  function handleEndRide() {
    const rideRef = database().ref(`Rider/undefined/${selectedRide.key}`);
    rideRef.remove();
    navigation.navigate('Rating')
    ToastAndroid.show('Ride Ended', ToastAndroid.SHORT);
    ToastAndroid.show('Please give rating to the ride', ToastAndroid.LONG);

  }
  useEffect(() => {

    const todoRef = database().ref('Rider/undefined');
    todoRef.on('value', (snapshot) => {
      const rides = [];
      snapshot.forEach((childSnapshot) => {
        const ride = childSnapshot.val();
        ride.key = childSnapshot.key;
        rides.push(ride);
        console.log(rides, 'oooooooooo')
        // console.warn(rides?.map((item)=> item?.key))
      });
      setRides(rides);
      setshow(false)
    });

    return () => {
      todoRef.off('value');
    };
  }, []);

  const [chatRooms, setChatRooms] = useState([]);


  useEffect(() => {
    // Fetch chat rooms from Firebase Realtime Database
    const chatRef = database().ref('chats');
    chatRef.on('value', (snapshot) => {
      const chatRooms = [];
      snapshot.forEach((childSnapshot) => {
        const chatRoom = childSnapshot.val();
        const userIds = Object.keys(chatRoom);
        chatRooms.push({ key: childSnapshot.key, userIds });
      });
      setChatRooms(chatRooms);
    });

    return () => {
      chatRef.off('value');
    };
  }, []);

  const [chatUsers, setChatUsers] = useState({});

  useEffect(() => {
    if (chatRooms.length > 0) {
      const users = {};
      chatRooms.forEach(({ userIds }) => {
        userIds.forEach((userId1) => {
          if (!users[userId1]) {
            users[userId1] = new Set();
          }
          userIds.forEach((userId2) => {
            if (userId1 !== userId2) {
              users[userId1].add(userId2);
            }
          });
        });
      });
      setChatUsers(users);
    }
  }, [chatRooms]);


  const renderItem = ({ item }) => {
    return (
      <View style={styles.rideContainer}>

        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: 'bold', color: '#043927' }}>Rider Name: {item.name}</Text>
          <Text style={{ color: 'black', width: 150 }}>Pickup: {item.pickup}</Text>
          <Text style={{ color: 'black', width: 150 }}>Dropoff: {item.dropoff}</Text>
          <Text style={{ color: 'black', width: 150 }}>Price: {item.price}</Text>
          <Text style={{ color: 'black', width: 150 }}>Seats: {item.seat}</Text>


        </View>
        <View style={{ marginVertical: 20 }}>
          <TouchableOpacity onPress={() => {
            setSelectedRide(item)
            setMapname(item.name);
            modal2Ref.current.toggleModal();
          }} style={{ backgroundColor: '#07fa02', padding: 7 }}>
            <Text style={{ color: 'black' }}>Open his location</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            // navigation.navigate('Chat',{type:item.key})
            navigation.navigate('Chat', { type: item.key, name: item.name });

            setSelectedRide(item)

          }} style={{ backgroundColor: '#043927', padding: 7 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setSelectedRide(item)
            setMapname(item.name);
            modalRef.current.toggleModal();
          }} style={{ backgroundColor: '#07fa02', padding: 7 }}>
            <Text style={{ color: 'black', textAlign: 'center' }}>Start Ride</Text>
          </TouchableOpacity>
        </View>

      </View>

    );
  };
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25 }}>
          <View style={{}}>
            <Lottie
              style={{

                height: 50,
                alignSelf: 'center',
                width: 50,
              }}
              source={require('../../assets/crazy.json')}
              autoPlay
              loop
            />
          </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginLeft: 10 }}>Available Rides</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>

      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 10, borderWidth: 1, borderRadius: 5, }}>
        <Icon name="search" size={24} color="#999" style={{ alignSelf: 'center', marginHorizontal: 10 }} />
        <TextInput
          style={{ flex: 1, paddingHorizontal: 10 }}
          placeholder="Search by Address"
          value={searchText}
          onChangeText={(text) => {
            setSearchText(text);
            handleSearch(text);
          }}
        />
      </View>
      {/* Ride list */}
      {show ? (
        <Lottie
          style={{
            height: 200,
            alignSelf: 'center',
            width: 200,
            marginTop: 100
          }}
          source={require('../../assets/lady.json')}
          autoPlay
          loop
        />
      ) : (
        <FlatList
          data={rides}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          ListEmptyComponent={() => <Text>No rides found.</Text>}
        />
      )

      }


      <HomeModal
        view={
          <View style={styles.container2}>
            <MapView
              style={styles.map}
              region={{
                latitude: selectedRide?.latitude,
                longitude: selectedRide?.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              } ?? region}
              showsUserLocation={false}
              showsMyLocationButton={true}
            >
              <Marker
                coordinate={{ latitude: selectedRide?.latitude ?? region.latitude, longitude: selectedRide?.longitude ?? region.longitude }}
                title={Mapname}
              />
            </MapView>
          </View>
        }
        ref={modal2Ref}
      />
      <HomeModal
        view={
          <View style={styles.container2}>
            <MapView
              style={styles.map}
              region={{
                latitude: selectedRide?.latitude,
                longitude: selectedRide?.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              } ?? region}
              showsUserLocation={true}
              showsMyLocationButton={true}
            >
              <Marker
                coordinate={{ latitude: selectedRide?.latitude ?? region.latitude, longitude: selectedRide?.longitude ?? region.longitude }}
                title={Mapname}
              />
            </MapView>
            <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, alignItems: 'center', justifyContent: 'center', bottom: 80, borderRadius: 5 }} onPress={handleEndRide}>
              <Text style={{ color: 'white' }}>End Ride</Text>
            </TouchableOpacity>
          </View>












        }
        ref={modalRef}
      />
    </View>


  );
};

export default History;

const styles = StyleSheet.create({
  rideContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})


