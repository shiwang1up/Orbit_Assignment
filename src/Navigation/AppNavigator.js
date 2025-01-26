import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../views/Home';
import {AppNavigatorStyles} from '../styles/globalStyles';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Search" component={Home} />
    </Stack.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: AppNavigatorStyles.tabBarStyle,
        tabBarIcon: ({focused}) => {
          let iconName;
          let IconComponent;
          let iconSize;

          if (route.name === 'Home') {
            iconName = 'home-outline';
            IconComponent = Ionicons;
            iconSize = 26;
          } else if (route.name === 'Discover') {
            iconName = 'search1';
            IconComponent = AntDesign;
            iconSize = 28;
          } else if (route.name === 'Create') {
            iconName = 'pluscircleo';
            IconComponent = AntDesign;
            iconSize = 26;
          } else if (route.name === 'Community') {
            iconName = 'people-outline';
            IconComponent = Ionicons;
            iconSize = 28;
          } else if (route.name === 'Me') {
            iconName = 'account-circle-outline';
            IconComponent = MaterialCommunityIcons;
            iconSize = 29;
          }

          return (
            <IconComponent
              name={iconName}
              size={iconSize}
              color={focused ? '#000' : '#C0C0C0'}
            />
          );
        },
        tabBarLabelStyle: AppNavigatorStyles.tabBarLabelStyle,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#C0C0C0',
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Discover" component={Home} />
      <Tab.Screen name="Create" component={Home} />
      <Tab.Screen name="Community" component={Home} />
      <Tab.Screen name="Me" component={Home} />
    </Tab.Navigator>
  );
}
