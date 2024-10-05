import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//screen import
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

//icon import
import {ShoppingCart} from 'iconsax-react-native';

import {SCREENS} from '../utilities/constant';

const Stack = createNativeStackNavigator();
const {Home, Notifications, Profile, Settings} = SCREENS;

const NativeStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        //tüm screenlerdeki headerleri gizle
        //headerShown: false
        //header a style vermek için
        // headerStyle: {backgroundColor: 'tomato'},
        headerTintColor: 'green',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: 'bold',
        },
        headerRight: () => <ShoppingCart size="32" color="#FF8A65" />,
      }}>
      <Stack.Screen name={Home} component={HomeScreen} />
      <Stack.Screen
        name={Notifications}
        component={NotificationsScreen}
        //headeri gizlemek için
        // options={{headerShown: false}}
      />
      <Stack.Screen name={Profile} component={ProfileScreen} />
      <Stack.Screen name={Settings} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default NativeStackNavigation;
