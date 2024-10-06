import {View, Text, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//util import
import {SCREENS} from '../utilities/constant.js';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';

//icons
import {Notification, Setting2, Home, Profile} from 'iconsax-react-native';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#33f515',
        tabBarInactiveTintColor: '#ffff',
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 5,
          borderTopColor: 'red',
          paddingVertical: 10,
        },
      }}
      initialRouteName={SCREENS.Notifications}>
      <Tab.Screen
        name={SCREENS.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Home size={focused ? 40 : 25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.Notifications}
        component={NotificationsScreen}
        options={{
          tabBarIcon: () => <Notification size="32" color="#dce775" />,
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: 'green',
            color: 'yellow',
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.Profile}
        component={ProfileScreen}
        options={{tabBarIcon: () => <Profile size="32" color="#dce775" />}}
      />
      <Tab.Screen
        name={SCREENS.Settings}
        component={SettingsScreen}
        options={{tabBarIcon: () => <Setting2 size="32" color="#dce775" />}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
