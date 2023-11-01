import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import Map from './Map'
import Lottie from 'lottie-react-native';


import { SearchBar } from 'react-native-screens'
import { useNavigation, useRoute } from '@react-navigation/native'
import MyList from './Search'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Switchs from './Switch'
const img1 = { uri: 'https://blog.kenjo.io/hubfs/AdobeStock_310893384%20%281%29.jpeg' }
const img2 = { uri: 'https://png.pngtree.com/png-clipart/20190617/original/pngtree-girl-going-home-greeting-woman-car-building-png-image_3855289.jpg' }
const HomeScreen = ({ navigation}) => {




  return (
    <View style={{ backgroundColor: 'white' }}>
           <View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' ,marginLeft:10}}>
        <View style={{}}>
          <Lottie
            style={{
          
              height: 40,
              alignSelf: 'center',
              width: 20,
            }}
            source={require('../../assets/home.json')}
            autoPlay
            loop
          />
        </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white',marginLeft:10 }}>Home</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>

      {/* <View style={{flexDirection:'row', marginTop:5, backgroundColor:'#D4D4D4' , height:50, width:'90%', justifyContent:'center', alignItems:'center',marginLeft:15, borderRadius:30}}>
        <FontAwesome5 name='search-location' size={35}/>
     <TextInput placeholder='Where to...' style={{ width:'80%', height:45, borderRadius:25, fontWeight:'bold', fontSize:20}}></TextInput>
    </View> */}
      <ScrollView style={{ padding: 10 }}>

        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>Ways to Travel:</Text>
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Ride')} style={{ backgroundColor: 'white', padding: 2, marginHorizontal: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',borderWidth:1,borderRadius:2 }}>
            {/* <Image style={{ height: 40, width: 40 }} source={require('../../assets/3.png')} /> */}
            <Lottie
            style={{
          
              height: 40,
              alignSelf: 'center',
              width: 80,
            }}
            source={require('../../assets/bike2.json')}
            autoPlay
            loop
          />
            <Text style={{ fontSize: 18, textAlign: 'center', color: 'black', right: 20 }}>Post For a Ride</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Pass')} style={{ backgroundColor: 'black', marginHorizontal: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', borderRadius: 2 }}>

            <Text style={{ fontSize: 18, textAlign: 'center', color: 'white', left: 15 }}>Need Ride</Text>
            {/* <Image style={{ height: 28, width: 44 }} source={require('../../assets/4.png')} /> */}
            <Lottie
            style={{
          
              height: 40,
      alignSelf:'center',
              width: 80,
          
            }}
            source={require('../../assets/woman.json')}
            autoPlay
            loop
          />

          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginTop: 20 }}>
          <Map />
        </View>
      </ScrollView>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    lineHeight: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000"
  }
})