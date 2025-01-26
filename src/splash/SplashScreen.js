import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IMAGE_SOURCES} from '../constants/constants';
import {globalStyles} from '../styles/globalStyles';
import typography from '../styles/typography';

export default function SplashScreen() {
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
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={splashLogo} style={styles.logo} />
        <Text style={[styles.text, {fontSize: typography.fontSizeExtraLarge}]}>
          Orbit Assignment
        </Text>
        <Text style={[styles.subtext, {fontSize: typography.fontSizeMedium}]}>
          Welcome to Instagram Clone
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    ...globalStyles.centered,
  },
  logo: {
    width: typography.width * 0.4,
    height: typography.height * 0.2,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  text: {
    fontWeight: typography.fontWeightBold,
    color: '#fff',
  },
  subtext: {
    fontWeight: typography.fontWeightRegular,
    color: '#fff',
    marginTop: 10,
  },
});
