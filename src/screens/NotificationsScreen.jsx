import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const NotificationsScreen = ({route}) => {
  console.log(route);
  return (
    <SafeAreaView>
      <Text>{route.params.title}</Text>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({});
