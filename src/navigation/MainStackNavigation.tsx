import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContadorScreen from '../screens/ContadorScreen';
import Screen2 from '../screens/Screen2';

const Stack = createNativeStackNavigator();
const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ContadorScreen} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStackNavigation;
const styles = StyleSheet.create({});
