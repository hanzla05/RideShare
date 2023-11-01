import React, { useState } from 'react';
import { View, Text, TextInput, Button,StyleSheet,TouchableOpacity, Image } from 'react-native';

function PaymentScreen() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCvc] = useState('');


  return (
    <View style={styles.container}>
         {/* Header */}
<View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
           
          </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Payment Details</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
{/* Header */}
<View style={{padding:20}}>
      <Text style={styles.label}>Card Number:</Text>
      <TextInput  style={styles.input}
        value={cardNumber}
        onChangeText={text => setCardNumber(text)}
        keyboardType="number-pad"
      />
      <Text style={styles.label}>Expiration Date:</Text>
      <TextInput  style={styles.input}
        value={expirationDate}
        onChangeText={text => setExpirationDate(text)}
        keyboardType="number-pad"
      />
      <Text style={styles.label}>CVC:</Text>
      <TextInput  style={styles.input}
        value={cvc}
        onChangeText={text => setCvc(text)}
        keyboardType="number-pad"
      />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
           
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 15,
              borderWidth: 0.1,
              width: 200,
              height: 50,
              backgroundColor: '#043927',
              justifyContent: 'center',
            }}
            onPress={()=>alert('Request Submit')}
            >
            <Text
              style={{textAlign: 'center',color:'#fff', elevation: 100, fontSize:19}}>
              Submit
            </Text>
          </TouchableOpacity>
          
        </View>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
    label:{
      fontSize:20,
      fontWeight:'bold',
      color:'black',
      marginBottom:10
    },
    input: {
      borderRadius: 10,
      width: '90%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      padding: 10,
    },
    button: {
      backgroundColor: '#0077C9',
      padding: 10,
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });
export default PaymentScreen;








































// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import Jazzcash from 'react-native-jazzcash';
// import firebase from 'firebase/app';
// import 'firebase/database';

// const PaymentScreen = () => {
//   const [paymentDetails, setPaymentDetails] = useState(null);

//   const handleMakePayment = async () => {
//     try {
//       const jazzcash = new Jazzcash({
//         apiKey: 'YOUR_API_KEY',
//         apiSecret: 'YOUR_API_SECRET',
//       });

//       const response = await jazzcash.createPaymentRequest({
//         amount: 1000, // Amount in PKR
//         orderId: '123456789', // Unique order ID
//         merchantId: 'YOUR_MERCHANT_ID',
//         redirectUrl: 'https://example.com/payment-success', // URL to redirect after payment success
//         cancelUrl: 'https://example.com/payment-cancel', // URL to redirect after payment cancellation
//       });

//       // Store the payment details in Firebase database
//       const paymentRef = firebase.database().ref('payments').push();
//       paymentRef.set({
//         orderId: response.orderId,
//         amount: response.amount,
//         paymentUrl: response.paymentUrl,
//         status: 'pending',
//       });

//       // Open the JazzCash payment page in a browser
//       Linking.openURL(response.paymentUrl);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View>
//       <Button title="Make Payment" onPress={handleMakePayment} />
//       {paymentDetails && (
//         <View>
//           <Text>Order ID: {paymentDetails.orderId}</Text>
//           <Text>Amount: {paymentDetails.amount}</Text>
//           <Text>Status: {paymentDetails.status}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default PaymentScreen;
