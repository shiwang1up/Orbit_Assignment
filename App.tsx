import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Immersive from 'react-native-immersive';
import SplashScreen from './src/splash/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/Navigation/AppNavigator';

const Stack = createNativeStackNavigator();
export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
      Immersive.setImmersive(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  if (isSplashVisible) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainApp" component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
