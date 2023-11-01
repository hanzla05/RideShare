import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React,{useState,useEffect} from 'react'
import database from '@react-native-firebase/database';
import Lottie from 'lottie-react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const img ={uri : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'}
const Settings = ({route}) => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      navigation.navigate('Login')
    } catch (e) {
      console.log(e);
    }
  }
  



  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

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


  return (
    <View >
        {/* <View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' ,marginLeft:30}}>
          <Image style={{height:40,width:40,elevation:20,zIndex:2}} source={require('../../assets/55.png')}/>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white',marginLeft:20 }}>Settings</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View> */}
        <View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' ,marginLeft:25}}>
        <View style={{backgroundColor:'white',borderRadius:10}}>
          <Lottie
            style={{
          
              height: 40,
              alignSelf: 'center',
              width: 50,
            }}
            source={require('../../assets/gear.json')}
            autoPlay
            loop
          />
        </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white',marginLeft:20 }}>Settings</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
      <View style={{alignItems:'center',flexDirection:'row', justifyContent:'space-between', marginTop:7,padding:4}}>
        <Text style={{fontSize:25, fontWeight:'bold', color:'black'}}>   {fullName}</Text>
        
        {/* <Image source={require('../../assets/23.png')} style={{height:80, width:70, borderRadius:10,borderWidth:1,borderColor:'black'}}/> */}
        <Lottie
            style={{
          
              height: 100,
              alignSelf: 'center',
              width: 90,
              bottom:10,
            
            }}
            source={require('../../assets/avatar.json')}
            autoPlay
            loop
          />
      </View>
      <Text style={{fontSize:17, color:'black',marginLeft:15}}>Email : {email}</Text>
      <Text style={{fontSize:17, color:'black',marginLeft:15}}>Phone : {phoneNumber}</Text>


<Text>     ----------------------------------------------------------------------  </Text>
      <View style={{ margin:5, padding:5, marginVertical:10, paddingVertical:10}}>
        {/* <TouchableOpacity onPress={()=>navigation.navigate('Messages')}><Text style={styles.text}>Messages</Text></TouchableOpacity> */}
        <TouchableOpacity onPress={()=>Linking.openSettings()}><Text style={styles.text}>Settings</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Payment')}><Text style={styles.text}>Payment</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Legal')}><Text style={styles.text}>Legal</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Contact')}><Text style={styles.text}>Contact Us</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('About')}><Text style={styles.text}>About Us</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Report')}><Text style={styles.text}>Report a Problem</Text></TouchableOpacity>
      </View>
      <View style={{justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity
            style={{
              borderRadius: 15,
              borderWidth: 0.1,
              width: 200,
              height: 50,
              backgroundColor: '#043927',
              justifyContent: 'center',
            }}
            onPress={handleLogout}
            >
            <Text
              style={{textAlign: 'center',color:'#fff', elevation: 100, fontSize:19}}>
              Log Out
            </Text>
          </TouchableOpacity>
          </View>


    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    text:{fontSize:22, fontWeight:'400', color:'black', marginTop:10}
})






