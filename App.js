import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from './screen/Screen1';
import Screen2 from './screen/Screen2';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='S1' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="S1" component={Screen1} />
        <Stack.Screen name="S2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
