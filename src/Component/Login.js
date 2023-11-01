import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import { firebase } from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import '@react-native-firebase/auth'
import Lottie from 'lottie-react-native';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import {
  PacmanIndicator,
} from 'react-native-indicators';

const Login = ({ navigation }) => {

useEffect(()=>{
  console.log(userid,'userid00000000000000000')
})

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userid, setuserid] = useState('');
  const [loading, setLoading] = useState(false);

//   const handleLogin = () => {
//     const params = {
// id : userid
//     };
//     if (email === '' || password === '') {
//       Alert.alert('Error', 'Please fill in all the fields');
//       return;
//     }
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(user.uid);
//         setuserid(user.uid);
//         navigation.replace('Tab', { params }); // Pass userid as a parameter
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         Alert.alert('Error', errorMessage);
//       });
//   };

const handleSubmit = () => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000); // 5 seconds delay
};
const handleLogin = () => {
  const params = {
    id: userid
  };
  if (email === '' || password === '') {
    // Alert.alert('Error', 'Please fill in all the fields');
    Toast.show({
      type: ALERT_TYPE.WARNING,
      textBody: 'Please fill in all the fields',
    })
    return;
  }
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user.uid);
      setuserid(user.uid);
      
      // Store user data in AsyncStorage
      try {
        await AsyncStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log(e);
      }

      navigation.replace('Tab', { params }); // Pass userid as a parameter
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert('Error', errorMessage);
    });
};

  return (
    <AlertNotificationRoot>
    <View style={styles.container}>
              <View style={{}}>
          <Lottie
            style={{
          
              height: 200,
              alignSelf: 'center',
              width: 200,
            }}
            source={require('../../assets/lift2.json')}
            autoPlay
            loop
          />
        </View>
      {/* <View>
        <Image
          style={{height: 200, width: 200}}
          source={require('../images/1.png')}
        />
      </View> */}
      <Text style={styles.text}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="*************@kfueit.edu.pk"
        onChangeText={setEmail}
        value={email}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="*********"
        onChangeText={setPassword}
        value={password}
        maxLength={8}
        secureTextEntry={true}
      />
      {/* <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity> */}
         <View>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('EnterNumber')
          }} style={{alignItems:'center',bottom:10}}>
            <Text style={{color:'#043927',fontWeight:'bold'}}>Forgot Password ?</Text>
          </TouchableOpacity>
      <TouchableOpacity
      
            onPress={()=>{
              handleLogin();
              handleSubmit()
            }}
            style={{
              borderRadius: 5,
              borderWidth: 0.1,
              width: 220,
              height: 50,
              backgroundColor: '#043927',
              justifyContent: 'center',
            }}>
        

            {loading ? (
        <PacmanIndicator size={50} color="white" />
      ) : (
        <Text
        style={{textAlign: 'center',color:'#fff', elevation: 100}}>
          Login
        </Text>
      )}





          </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={{
              borderRadius: 5,
              borderWidth: 0.1,
              width: 220,
              height: 50,
              backgroundColor: '#043927',
              justifyContent: 'center',
            }}>
            <Text
              style={{textAlign: 'center', color:'#fff', elevation: 100}}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 15,
              borderWidth: 0.1,
              width: 220,
              height: 60,
              backgroundColor: '#043927',
              justifyContent: 'center',
            }}
            onPress={()=>navigation.navigate('SignupP')}
            >
            <Text
              style={{textAlign: 'center',color:'#fff', elevation: 100}}>
              Register As Passenger
            </Text>
          </TouchableOpacity>
          
        </View> */}
      </View>
    </View>
    </AlertNotificationRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  input: {
    borderRadius: 10,
    width: '90%',
    height: 40,
    borderColor: 'gray',
    fontSize: 18,
    marginBottom: 20,
    padding: 10,
    fontWeight: '700'
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#043927',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10
  },
});

export default Login;
