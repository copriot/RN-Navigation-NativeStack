# 1-Öncelikle her paket kurulumu için metroyu durdu

# 2- Navigation paket kurulumu için aşağıdaki komutları çalıştır

-npm install @react-navigation/native
-npm install react-native-screens react-native-safe-area-context
-npm i react-native-gesture-handler (ios cihazlarda sayfayı kaydırmak için)
-npx pod -install (cd ios/pod install ------scripts etiketlerine tanıt.)

# 3- kurulumlardan sonra index.js dosyasının üstünde react-native-gesturhandler'i import et

-- import 'react-native-gesture-handler'

# 4- npm install @react-navigation/native-stack

# 5-import { createNativeStackNavigator } from '@react-navigation/native-stack';

-- const Stack = createNativeStackNavigator();
