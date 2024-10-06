import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import NativeStackNavigation from './src/navigation/NativeStackNavigation';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';

const App = () => {
  return (
    <NavigationContainer>
      {/* <NativeStackNavigation /> */}
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
