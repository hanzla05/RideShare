import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image,ToastAndroid } from 'react-native';
import { Rating } from 'react-native-ratings';
import Lottie from 'lottie-react-native';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import { useNavigation } from '@react-navigation/native';


const Ratings = () => {
  const navigation = useNavigation();
  const [rate, setRating] = useState(3);
  const [comment, setComment] = useState('');

  const submitRating = () => {
    const ratingData = { rate, comment };
    const databaseRef = firebase.database().ref('ratings');
    databaseRef.push(ratingData); 
    // alert('Thanks for your rating')
    // Dialog.show({
    //   type: ALERT_TYPE.SUCCESS,
    //   title: 'Success',
    //   textBody: 'Thanks for your rating',
    //   button: 'close',
    // })
    ToastAndroid.show('Thanks for your rating', ToastAndroid.LONG);
    navigation.navigate('HomeScreen')

 
  };

  return (
    <AlertNotificationRoot>
    <View style={styles.container}>
      {/* Header */}
      <View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' ,marginLeft:10}}>
          <View style={{}}>
            <Lottie
              style={{
                height: 60,
                alignSelf: 'center',
                width: 30,
              }}
              source={require('../../assets/star.json')}
              autoPlay
              loop
            />
          </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white',marginLeft:10 }}>Rating</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
      {/* Header */}
      <View style={{padding:20}}>
        <Text style={styles.label}>Rating</Text>
        <Rating
          startingValue={rate}
          fractions={1}
          ratingCount={5}
          onFinishRating={(rating) => setRating(rating)}
        />
        <Text style={styles.label}>Comment</Text>
        <TextInput
          style={styles.input}
          value={comment}
          onChangeText={(text) => setComment(text)}
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"

        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              marginTop:20,
              borderRadius: 15,
              borderWidth: 0.1,
              width: 200,
              height: 50,
              backgroundColor: '#043927',
              justifyContent: 'center',
            }}
            onPress={()=>{
              submitRating()
            }}
          >
            <Text
              style={{textAlign: 'center',color:'#fff', elevation: 100, fontSize:19}}>
              Rate Ride
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
    </AlertNotificationRoot>
  );
};

export default Ratings
const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  label:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    marginBottom:10,
    marginTop:10
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    padding: 5,
  },

});