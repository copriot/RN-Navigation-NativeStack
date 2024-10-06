import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const NotificationsScreen = ({route, navigation}) => {
  //uygulama hangi telefonda açılırsao telefonun ekran ölçülerini alır
  const {width, height} = Dimensions.get('screen');
  console.log(route);
  return (
    <SafeAreaView>
      <Text>{route?.params?.title}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'tomato',
          borderRadius: 20,
          marginTop: 15,
          padding: 10,
        }}
        onPress={() => navigation.goBack()}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Bir screen geri git
        </Text>
      </TouchableOpacity>
      <View
        style={{
          width: width * 0.2,
          height: height * 0.2,
          backgroundColor: 'pink',
        }}></View>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({});
