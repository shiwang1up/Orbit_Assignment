import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IMAGE_SOURCES} from '../constants/constants';
import {globalStyles} from '../styles/globalStyles';
const SplashScreen = () => {
  const splashLogo = IMAGE_SOURCES.SPLASH_LOGO;
  return (
    <LinearGradient
      colors={[
        '#833ab4',
        '#fd1d1d',
        '#fcb045',
        // '#7879FF',
        // '#A3A3FF',
        // '#BFBFFF',
      ]}
      start={{x: 1, y: 0}} // start from right top
      end={{x: 0, y: 1}} // end at bottom left
      style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={splashLogo} style={styles.logo} />
        <Text style={styles.text}>Orbit Assignment</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 400,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SplashScreen;
