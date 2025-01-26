import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../views/Home';
import {AppNavigatorStyles} from '../styles/globalStyles';
import Search from '../views/Search';
import {ICON_COLORS, ICON_SIZES, ICON_NAMES} from '../constants/constants';

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
            iconName = `${ICON_NAMES.HOME}`;
            IconComponent = Ionicons;
            iconSize = ICON_SIZES.SMALL;
          } else if (route.name === 'Discover') {
            iconName = `${ICON_NAMES.DISCOVER}`;
            IconComponent = AntDesign;
            iconSize = ICON_SIZES.MEDIUM;
          } else if (route.name === 'Create') {
            iconName = `${ICON_NAMES.CREATE}`;
            IconComponent = AntDesign;
            iconSize = ICON_SIZES.SMALL;
          } else if (route.name === 'Community') {
            iconName = `${ICON_NAMES.COMMUNITY}`;
            IconComponent = Ionicons;
            iconSize = ICON_SIZES.MEDIUM;
          } else if (route.name === 'Me') {
            iconName = `${ICON_NAMES.ME}`;
            IconComponent = MaterialCommunityIcons;
            iconSize = ICON_SIZES.LARGE;
          }

          return (
            <IconComponent
              name={iconName}
              size={iconSize}
              color={
                focused ? `${ICON_COLORS.PRIMARY}` : `${ICON_COLORS.SECONDARY}`
              }
            />
          );
        },
        tabBarLabelStyle: AppNavigatorStyles.tabBarLabelStyle,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#C0C0C0',
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Discover" component={Search} />
      <Tab.Screen name="Create" component={Home} />
      <Tab.Screen name="Community" component={Home} />
      <Tab.Screen name="Me" component={Home} />
    </Tab.Navigator>
  );
}
