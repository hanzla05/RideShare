import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const Onetime = ({navigation}) => {
  return (
    <View style={{ justifyContent:'center'}}>
     {/* Header */}
<View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
           
          </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>KFUEIT RideShare</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
{/* Header */}
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop:"40%"}}>
        <Text>OTP Verification</Text>
        <Text>Enter the OTP sent to your given number</Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          margin: 10,
        }}>
<OTPInputView
    style={{width: '80%', height: 150 , color:'black'}}
    pinCount={4}
    autoFocusOnLoad
    editable={true}
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
    })}
></OTPInputView>
<TouchableOpacity
          style={{
            borderRadius: 15,
            borderWidth: 0.1,
            width: 180,
            height: 50,
            backgroundColor: '#043927',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Signupas')}>
          <Text style={{textAlign: 'center', color: 'white', fontSize:20}}>Verify</Text>
        </TouchableOpacity>  
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#043927',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#043927',
  },
});
export default Onetime;
