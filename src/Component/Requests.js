import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView} from 'react-native'
import React,{useState} from 'react'

const Requests = () => {
  const [requester, setRequester] = useState([
    { key: 1, item: 'Rider #1234' },
    { key: 2, item: 'Rider #3525' },
    { key: 3, item: 'Rider #3535' },
    { key: 4, item: 'Rider #5456' },
    { key: 5, item: 'Rider #7534' },
    { key: 6, item: 'Rider #7539' },
    { key: 7, item: 'Rider #4257' },
    { key: 8, item: 'Rider #8567' },
    { key: 9, item: 'Rider #2485' },
  ])
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
{/* Header */}
      <View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center"}}>
        <View style={{ flexDirection: 'row' }}> 

        

          <View style={{marginLeft:'25%'}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Available Rides</Text>
          </View>

        </View>
      </View>
{/* Header */}

{/* Body */}
    <ScrollView>
    {
          requester.map((i) => {
            return (
              <View style={{backgroundColor:'white',padding:15}} key={i.key}>

                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",}}>
                <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{i.item}</Text>
                <TouchableOpacity style={{backgroundColor:"#043927",height:30,width:95,alignItems:"center",justifyContent:'center',borderRadius:10,borderWidth:1}}>
                  <Text style={{fontSize:14,color:'white'}}>Accept</Text></TouchableOpacity>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,}}>
                <TouchableOpacity><Text style={{color:'#043927',fontSize:14,textDecorationLine:'underline'}}>View Details</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"white",height:30,width:95,alignItems:"center",justifyContent:'center',borderRadius:10,borderWidth:1,}}><Text style={{fontSize:14,color:'black'}}>Decline</Text></TouchableOpacity>
                </View>

                <View style={{backgroundColor:'#D1D1D1',height:2,marginTop:10}}>

                </View>
                
              </View>
            )
          })

        }

    </ScrollView>
    </View>
  )
}

export default Requests

const styles = StyleSheet.create({})