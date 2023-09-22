import 'react-native-gesture-handle';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from "./pages/SingIn/index.js";

export default function App() {
  return (
      <NavigationContainer>
          <SignIn />
      </NavigationContainer>
  );
}
