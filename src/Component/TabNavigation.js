// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './HomeScreen';
// import History from './History';
// import Settings from './Settings';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Messages from './Messages';
// import RideDetails from './RideDetails'
// import RatingScreen from './Rating'
// import { useRoute } from '@react-navigation/native';
// const Tab = createBottomTabNavigator();
// const TabNavigation = () => {
//     const route = useRoute();
//     // const {id} = route.params.params;
//    console.log(route,'tabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
//     return (
//         <Tab.Navigator initialRouteName='HomeScreen'
//         screenOptions={
//             {headerShown : false,
//             tabBarShowLabel: false,
//             tabBarStyle:{backgroundColor:'#043927', height:60, borderTopLeftRadius:20, borderTopRightRadius:20},
//             tabBarInactiveTintColor: '#fff',
//             tabBarActiveTintColor:'green'
            
//             }
//         }
//         >
         
//                 <Tab.Screen name="HomeScreen" component={HomeScreen} 
//           options={{
            
//             tabBarIcon: ({color, size}) => (
//                 <Ionicons name="home-outline" color={color} size={size} 
//     />)
//           }}
//           />
         
          
//           <Tab.Screen name='History' component={History}
//              options={{
//                 tabBarIcon: ({color, size}) => (
//                 <MaterialIcons name='location-history' color={color} size={size}/>
//                     )
//                }}/>
//            <Tab.Screen name='Ride' component={RideDetails}
//                         options={{
//                             tabBarIcon: ({color, size}) => (
//                                 <Ionicons name="car-sport-outline" color={color} size={size} 
//                     />)
//                            }}
//                        ></Tab.Screen>
//                <Tab.Screen name='Messages' component={Messages}
//              options={{
//                 tabBarIcon: ({color, size}) => (
//                     <MaterialIcons name="message" color={color} size={size} 
//         />)
//                }}/>
//                  <Tab.Screen name='Settings' component={Settings}
//              options={{
//                 tabBarIcon: ({color, size}) => (
//                     <Ionicons name="settings-outline" color={color} size={size} 
//         />)
//                }}/>
                       
//         <Tab.Screen  name='Rating' component={RatingScreen} options={{
//                 tabBarIcon: ({color, size}) => (
//                     <MaterialIcons name="star-rate" color={color} size={size} 
//         />)
//                }}></Tab.Screen>
//         </Tab.Navigator>
//       );
// }

// export default TabNavigation

// const styles = StyleSheet.create({})

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native';
import Ant from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import HomeScreen from './HomeScreen';
import History from './History';
import Settings from './Settings';
import Messages from './Messages';
import RideDetails from './RideDetails';
import RatingScreen from './Rating';
import Pass from './Pass';
import History1 from './History1';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const route = useRoute();
  console.log(route,'rrrrrrrrrr')
  const { id } = route.params?.params ?? {};

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#043927',
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'green',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        initialParams={{ id: id }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
            <Tab.Screen
        name="Ride"
        component={RideDetails}
        initialParams={{ id: id }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ant name="pluscircle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        initialParams={{ id: id }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car-sport-outline" color={color} size={size} />

          ),
        }}
      />

            <Tab.Screen
        name="Pass"
        component={Pass}
        initialParams={{ id: id }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="location-history" color={color} size={size} />

          ),
        }}
      />
                  <Tab.Screen
        name="History1"
        component={History1}
        initialParams={{ id: id }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="users" color={color} size={size} />
            
          ),
        }}
      />
      {/* <Tab.Screen
        name="Messages"
        component={Messages}
        initialParams={{ id: id }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="message" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Settings"
        component={Settings}
        initialParams={{ id: id }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Rating"
        component={RatingScreen}
        initialParams={{ id: id }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="star-rate" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
