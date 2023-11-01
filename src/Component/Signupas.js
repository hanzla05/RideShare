import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import SignupP from './SignupP';

const Signupas = ({navigation}) => {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', padding:30}}>
      <View>
        <Image
          style={{height: 250, width: 250}}
          source={require('../images/1.png')}
        />
      </View>
      <View>
      <TouchableOpacity
      
            onPress={() => navigation.navigate('Login')}
            style={{
              borderRadius: 15,
              borderWidth: 0.1,
              width: 220,
              height: 60,
              backgroundColor: '#043927',
              justifyContent: 'center',
            }}>
            <Text
              style={{textAlign: 'center',color:'#fff', elevation: 100}}>
              Login
            </Text>
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
              borderRadius: 15,
              borderWidth: 0.1,
              width: 220,
              height: 60,
              backgroundColor: '#043927',
              justifyContent: 'center',
            }}>
            <Text
              style={{textAlign: 'center', color:'#fff', elevation: 100}}>
              Signup
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
  );
};

export default Signupas;

const styles = StyleSheet.create({});
