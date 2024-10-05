import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../utilities/constant';

const HomeScreen = () => {
  const navigation = useNavigation();
  const name = 'Udemig ReactNative eğitimine hoşgeldiniz!';
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(SCREENS.Notifications, {title: name})
        }
        style={{backgroundColor: 'red', padding: 10, borderRadius: 20}}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Goto Notification Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.Profile)}
        style={{backgroundColor: 'blue', padding: 10, borderRadius: 20}}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Goto Profile Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.Settings)}
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
