import { View, Text, Image, TextInput, TouchableOpacity, StatusBar,Linking,Alert } from 'react-native'
import React,{useState} from 'react'
import Lottie from 'lottie-react-native';
import { firebase } from '@react-native-firebase/firestore';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
const EnterNumber = ({navigation}) => {

  const [email, setEmail] = useState('');
  // const openGmail = async () => {
  //   const url = 'googlegmail://';
  //   const supported = await Linking.canOpenURL(url);
  
  //   if (supported) {
  //     await Linking.openURL(url);
  //   } else {
  //     Alert.alert(
  //       'Gmail app not found',
  //       'Please install the Gmail app to proceed',
  //       [{ text: 'OK' }],
  //       { cancelable: false }
  //     );
  //   }
  // };
  

  // const handleResetPassword = () => {
  //   firebase.auth().sendPasswordResetEmail(email)
  //     .then(() => {
  //       // Password reset email sent successfully
  //       console.log('Password reset email sent successfully');
  //       Dialog.show({
  //         type: ALERT_TYPE.SUCCESS,
  //         title: 'Success',
  //         textBody: 'Password reset email sent successfully',
  //         button: 'close',
  //       })
  //     })
  //     .catch((error) => {
  //       Dialog.show({
  //         type: ALERT_TYPE.WARNING,
  //         title: 'Warning !',
  //         textBody: (error),
  //         button: 'close',
  //       })
  //       console.log(error);
  //     });
  // }
  const handleResetPassword = () => {
    if (email.trim() !== '') {
      firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
          // Password reset email sent successfully
          console.log('Password reset email sent successfully');
          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'Password reset email sent successfully',
            button: 'close',
          })
        })
        .catch((error) => {
          console.log(error);
          Alert.alert(
            'Error',
            error.message,
            [{ text: 'OK' }],
            { cancelable: false }
          );
        });
    } else {
      Alert.alert(
        'Error',
        'Please enter your email',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }
  }




  return (
    <AlertNotificationRoot>
    <View style={{justifyContent:'center'}}>
    <Lottie
            style={{
          
              height: 200,
              alignSelf: 'center',
              width: 200,
              marginTop:60

            }}
            source={require('../../assets/lift2.json')}
            autoPlay
            loop
          />
          <View style={{justifyContent:'center',alignItems:'center', marginTop:"30%"}}>
        <Text style={{fontSize:17,color:'#4F7942'}}>Enter Your Email to reset Password</Text>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center', margin:20}}>
        {/* <Text style={{fontSize:25}}>+92 |</Text> */}
        <TextInput
        value={email}
        onChangeText={setEmail}

       placeholder="*************@kfueit.edu.pk"

        
        style={{borderColor:'black',width:'100%' ,color:'#043927', fontSize:20}}
        />
        </View>
        <TouchableOpacity      onPress={handleResetPassword}
 style={{borderRadius:5,borderWidth:0.1,width:180,height:45,backgroundColor:'#043927',justifyContent:'center'}} onPress={handleResetPassword}><Text style={{textAlign:'center',color:'white'}}>Reset Password</Text></TouchableOpacity>
     </View>
    </View>
    </AlertNotificationRoot>
  )
}

export default EnterNumber