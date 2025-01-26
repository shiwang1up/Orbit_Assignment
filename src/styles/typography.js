import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const typography = {
  fontSizeExtraSmall: width < 400 ? 10 : 12,
  fontSizeSmall: width < 400 ? 12 : 14,
  fontSizeMedium: width < 400 ? 16 : 18,
  fontSizeLarge: width < 400 ? 20 : 22,
  fontSizeExtraLarge: width < 400 ? 24 : 26,
  fontSizeHuge: width < 400 ? 30 : 32,
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightBold: '800',
  width,
  height,
};

export default typography;
