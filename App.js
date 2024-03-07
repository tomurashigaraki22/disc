import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppProvider } from './Context';
import AppNav from './navigation/AppNav';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <AppProvider>
      <AppNav/>
    </AppProvider>
  );
}
