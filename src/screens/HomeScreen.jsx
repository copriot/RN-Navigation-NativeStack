import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Notifications')}
        style={{backgroundColor: 'red', padding: 10, borderRadius: 20}}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Goto Notification Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={{backgroundColor: 'blue', padding: 10, borderRadius: 20}}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Goto Profile Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={{backgroundColor: 'orange', padding: 10, borderRadius: 20}}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Goto Settings Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
