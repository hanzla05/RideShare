// // import { View, Text ,Image} from 'react-native'
// // import React from 'react'
// // import Lottie from 'lottie-react-native';

// // const Splash = () => {
// //   return (
// //     <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'#fff'}}>
// //                   <View style={{}}>
// //           <Lottie
// //             style={{
          
// //               height: 200,
// //               alignSelf: 'center',
// //               width: 200,
// //             }}
// //             source={require('../../assets/lift2.json')}
// //             autoPlay
// //             loop
// //           />
// //         </View>
// //       <Text style={{fontSize:25,fontWeight:'bold', color:'black'}}>KFUEIT RideShare</Text>
// //     </View>
// //   )
// // }

// // export default Splash


// import React, { useEffect } from 'react';
// import { View, Text, Image } from 'react-native';
// import Lottie from 'lottie-react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Splash = ({ navigation }) => {
//   useEffect(() => {
//     const checkUser = async () => {
//       try {
//         const value = await AsyncStorage.getItem('user');
//         if (value !== null) {
//           // User data is stored in AsyncStorage, navigate to Tab screen
//           const params = { id: JSON.parse(value).uid };
//           navigation.replace('Tab', { params });
//         } else {
//           // User data is not stored in AsyncStorage, navigate to Login screen
//           navigation.replace('Login');
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     checkUser();
//   }, [navigation]);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
//       <View style={{}}>
//         <Lottie
//           style={{
//             height: 200,
//             alignSelf: 'center',
//             width: 200,
//           }}
//           source={require('../../assets/lift2.json')}
//           autoPlay
//           loop
//         />
//       </View>
//       <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>KFUEIT RideShare</Text>
//     </View>
//   );
// };

// export default Splash;


import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Lottie from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const checkUser = async () => {
      try {
        const value = await AsyncStorage.getItem('user');
        if (value !== null) {
          // User data is stored in AsyncStorage, navigate to Tab screen
          const params = { id: JSON.parse(value).uid };
          navigation.replace('Tab', { params });
        } else {
          // User data is not stored in AsyncStorage, navigate to Login screen
          navigation.replace('Login');
        }
      } catch (e) {
        console.log(e);
      }
    };
    setTimeout(() => {
      checkUser();
    }, 3000); // 3-second timeout
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
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
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>KFUEIT RideShare</Text>
    </View>
  );
};

export default Splash;
