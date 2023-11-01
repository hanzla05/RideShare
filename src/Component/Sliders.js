import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Sliders = ({ navigation }) => {

  return (
    <Onboarding
      showNext={false}
      showSkip={false}
      onDone={() => {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        navigation.navigate('Signupas');
      }}
      pages={[
        {
          backgroundColor: '#ffff',
          image: <Image source={require('../images/3.png')} />,
          title: 'Ride together with RideShare',
          subtitle: 'RideShare makes riding together really fun, easy and fair!',
        },
        {
          title: 'Connect',
          backgroundColor: '#ffff',
          image: <Image source={require('../images/2.png')} />,
          subtitle:
            'Join your friends and neighbors with your email address or social media. Together we look for the best matches and we will connect you with each other to ride together.',
        },
        {
          title: 'Welcome to KFUEIT RideShare',
          backgroundColor: '#ffff',
          image: (
            <Image
              style={{ height: 300, width: 350 }}
              source={require('../images/4.png')}
            />
          ),
          subtitle:
            'So let\'s get started and make your next ride hassle-free and affordable, with just a few taps!',
        },
      ]}
    />
  );
};

export default Sliders;
