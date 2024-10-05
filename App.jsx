import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import NativeStackNavigation from './src/navigation/NativeStackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <NativeStackNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
