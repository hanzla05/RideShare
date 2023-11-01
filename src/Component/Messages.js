// import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView} from 'react-native'
// import React,{useState} from 'react'

// const Messages = ({navigation}) => {
//   const [requester, setRequester] = useState([
//     { key: 1, item: 'Rider #1234', text:'Hello, I am Available' },
//     { key: 2, item: 'Rider #3525',text:'You still looking for the ride?' },
//     { key: 3, item: 'Rider #3535',text:'Thank You' },
//     { key: 4, item: 'Rider #5456', text:'Can you help me?'},
//     { key: 5, item: 'Rider #7534',text:'No' },
//     { key: 6, item: 'Rider #7539',text:'Somtimes yes' },
//     { key: 7, item: 'Rider #4257', text:'Not Reallys'},
//     { key: 8, item: 'Rider #8567',text:'It is what it is' },
//     { key: 9, item: 'Riedr #2485',text:'okay' },
//   ])
//   return (
//     <View style={{ flex: 1, backgroundColor: "white" }}>
//    <View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
//           <View style={{}}>
//             <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Messages</Text>
//           </View>
//           <View style={{ width: 24, width: 24 }}></View>
//         </View>
//       </View>

// {/* Body */}
//     <ScrollView>
//     {
//           requester.map((i) => {
//             return (
//               <View style={{backgroundColor:'white',padding:15}} key={i.key}>

//                 <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",}}>
//                 <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{i.item}</Text>
             
//                 </View>

//                 <View style={{flexDirection:"row",justifyContent:"space-between",}}>
//                 <TouchableOpacity onPress={()=>navigation.navigate('Conversation')}><Text style={{color:'#A8A8A8',fontSize:14,}}>{i.text} </Text></TouchableOpacity>
//                 </View>

//                 <View style={{backgroundColor:'#D1D1D1',height:2,marginTop:10}}></View>
                
//               </View>
//             )
//           })

//         }

//     </ScrollView>
//     </View>
//   )
// }

// export default Messages

// const styles = StyleSheet.create({})



import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';

const Messages = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const userRef = database().ref('users');
    userRef.on('value', (snapshot) => {
      const users = [];
      snapshot.forEach((childSnapshot) => {
        const user = childSnapshot.val();
        user.key = childSnapshot.key;
        users.push(user);
      });
      setUsers(users);
    });

    return () => {
      userRef.off('value');
    };
  }, []);

  const renderItem = ({ item }) => {
    console.log(item,'details')
    return (
      <TouchableOpacity style={styles.userContainer} onPress={() => navigation.navigate('Chat', { user: item })}>
        {/* <View style={styles.userContainer}> */}
          <Text>{item.fullName}</Text>
        {/* </View> */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Messages</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        ListEmptyComponent={() => <Text>No users found.</Text>}
      />
    </View>
  );
};


export default  Messages ;

const styles = StyleSheet.create({
  userContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
  },
  messageContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white'}})


// import React, { useState, useCallback, useEffect } from 'react';
// import { GiftedChat } from 'react-native-gifted-chat';
// import { firebase } from '@react-native-firebase/auth';
// import database from '@react-native-firebase/database';

// export default function ChatScreen() {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     // Load messages from Firebase
//     const chatRef = database().ref('chats').child(getChatId());
//     chatRef.on('value', snapshot => {
//       const messageList = [];
//       snapshot.forEach(child => {
//         messageList.push({
//           ...child.val(),
//           _id: child.key
//         });
//       });
//       setMessages(GiftedChat.append([], messageList.reverse()));
//     });

//     // Unsubscribe listener on unmount
//     return () => {
//       chatRef.off('value');
//     };
//   }, []);

//   const onSend = useCallback((newMessages = []) => {
//     const chatId = getChatId();
//     const chatRef = database().ref('chats').child(chatId);

//     // Add new message to Firebase
//     newMessages.forEach(message => {
//       chatRef.push({
//         ...message,
//         createdAt: message.createdAt.getTime(),
//         user: {
//           _id: message.user._id,
//           name: message.user.name
//         }
//       });
//     });
//   }, []);

//   const getChatId = () => {
//     const { id } = firebase.auth().currentUser;

//     const users = [id].sort();
//     return users.join('-');
//   };

//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={messages => onSend(messages)}
//       user={{
//         _id: firebase.auth().currentUser.uid,
//         name: firebase.auth().currentUser.displayName
//       }}
//     />
//   );
// }