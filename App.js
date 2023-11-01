// import Splash from './src/Component/Splash'
// import React, { useEffect, useState } from 'react'
// import Sliders from './src/Component/Sliders'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import Messages from './src/Component/Messages'
// import EnterNumber from './src/Component/EnterNumber'
// import Onetime from './src/Component/Onetime'
// import SignupP from './src/Component/SignupP'
// import Signupas from './src/Component/Signupas'
// import SignupD from './src/Component/SignupD'
// import Login from './src/Component/Login'
// import HomeScreen from './src/Component/HomeScreen'
// import TabNavigation from './src/Component/TabNavigation'
// import { Settings } from 'react-native'
// import Requests from './src/Component/Requests'
// import Conversation from './src/Component/Conversation'
// import PaymentScreen from './src/Component/Payment'
// import About from './src/Component/About'
// import Legal from './src/Component/Legal'
// import Report from './src/Component/Report'
// import Contact from './src/Component/Contact'
// import CurrentUserLocation from './src/Component/CurrentUserLocation'
// import OtherUserLocation from './src/Component/OtherUserLocation '
// import Signup from './src/Component/Signup'
// import Chat from './src/Component/Chat'
// import RideDetails from './src/Component/RideDetails'
// const stack =createNativeStackNavigator();


// const App = () => {
//   const [loading,isLoaded]= useState(true)
//   useEffect(()=>{
//     setTimeout(() => {
//       isLoaded(false)
//     }, 3000);
//   })
//   return (
//     <NavigationContainer>
//       <stack.Navigator initialRouteName='Splash'>
//         {loading?
//         <stack.Screen options={{headerShown:false}} name='Splash' component={Splash}></stack.Screen>
//       :null}
//         <stack.Screen options={{headerShown:false}} name='Slider' component={Sliders}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='Tab' component={TabNavigation}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='EnterNumber' component={EnterNumber}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='Onetime' component={Onetime}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='Signupas' component={Signupas}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='SignupP' component={SignupP}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='SignupD' component={SignupD}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='Ride' component={RideDetails}></stack.Screen>

//         <stack.Screen options={{headerShown:false}} name='HomeScreen' component={HomeScreen}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='Messages' component={Messages}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='Requests' component={Requests}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='Conversation' component={Conversation}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='Payment' component={PaymentScreen}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='About' component={About}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='Legal' component={Legal}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='Chat' component={Chat}></stack.Screen>

//         <stack.Screen options={{headerShown:false}} name='Report' component={Report}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='Contact' component={Contact}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='Signup' component={Signup}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='Login' component={Login}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='OtherUserLocation' component={OtherUserLocation}></stack.Screen>
//         <stack.Screen options={{headerShown:false}} name='CurrentUserLocation' component={CurrentUserLocation}></stack.Screen>
//       </stack.Navigator>
//     </NavigationContainer>
   

//   )
// }


// export default App



import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Bar from './src/Component/Bar';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>llllllllllll</Text>
      <Bar
        percentage={70} // Set the percentage value between 0 and 100
        strokeWidth={10}
        trailColor="#f2f2f2"
        pathColor="#4286f4"
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
