

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Camera = () => {
    const [image, setimage] = useState(
        'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png',
      );
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setimage(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setimage(result.assets[0].uri);
  };

  return (
    <View style={styles.container}>
          <Image style={styles.imageStyle} source={{uri: image}} />
          
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity onPress={openCamera} style={styles.button}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
    

      <TouchableOpacity onPress={openGallery} style={styles.button}>
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    marginTop:10,
    marginLeft:5,
    backgroundColor: '#043927',
    borderRadius: 5,
    width:130,
    height:30
  },
  buttonText: {
    fontSize: 18,
    color: '#ebebeb',
    fontWeight: 'bold',
  },
  imageStyle: {
    height: 150,
    width: 150,
    marginTop: 20,
    borderRadius: 150,
    backgroundColor:'grey'
  },
});

export default Camera;