import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home'
import Register from './components/Register'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
       <Stack.Screen
          name="register"
        component={Register}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(218, 204, 195, 0.884)',
    height: '100vh',
  }
});