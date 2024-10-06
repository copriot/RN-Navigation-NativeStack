import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';
//screen import
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CartScreen from '../screens/CartScreen';

//icon import
import {ShoppingCart, Setting2} from 'iconsax-react-native';

import {SCREENS} from '../utilities/constant';

const Stack = createNativeStackNavigator();
const {Home, Notifications, Profile, Settings, Cart} = SCREENS;

const NativeStackNavigation = () => {
  const navigation = useNavigation();
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
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate(Cart)}>
            <ShoppingCart size="32" color="#FF8A65" />
          </TouchableOpacity>
        ),
        // headerLeft: () => (
        //   <TouchableOpacity onPress={() => navigation.navigate(Settings)}>
        //     <Setting2 size="32" color="#FF8A65" />
        //   </TouchableOpacity>
        // ),

        //header geri butonu gizler
        headerBackVisible: false,
        //headeri geri titlesini gizler
        // headerBackTitleVisible: false,
        //Header  back title degistir
        // headerBackTitle: 'Geri',
      }}
      initialRouteName={Home}>
      <Stack.Screen name={Home} component={HomeScreen} />
      <Stack.Screen
        name={Notifications}
        component={NotificationsScreen}
        //headeri gizlemek için
        // options={{headerShown: false}}
      />
      <Stack.Screen name={Profile} component={ProfileScreen} />
      <Stack.Screen name={Settings} component={SettingsScreen} />
      <Stack.Screen name={Cart} component={CartScreen} />
    </Stack.Navigator>
  );
};

export default NativeStackNavigation;
