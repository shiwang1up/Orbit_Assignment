import {StyleSheet, Dimensions} from 'react-native';
const screenHeight = Dimensions.get('window').height;

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    height: screenHeight - 60,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export const AppNavigatorStyles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabBarLabelStyle: {
    fontSize: 12,
    marginTop: 4,
  },
  tabBarIcon: {
    // No styles here, as the icon styles are dynamic
  },
});
