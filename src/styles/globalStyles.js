import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    paddingVertical: 20,
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
