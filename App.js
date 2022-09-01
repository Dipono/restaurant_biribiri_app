import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Delivery from './components/Delivery';
import SignInScreen from './components/Home';
import SignUpScreen from './components/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
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
