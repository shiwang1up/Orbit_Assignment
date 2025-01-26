import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Immersive from 'react-native-immersive';
import SplashScreen from './src/splash/SplashScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
      Immersive.setImmersive(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  if (isSplashVisible) {
    return <SplashScreen />;
  }
  return (
    <View>
      <Text>ComponentName</Text>
    </View>
  );
}
