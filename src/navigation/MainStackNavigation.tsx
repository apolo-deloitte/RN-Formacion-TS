import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContadorScreen from '../screens/ContadorScreen';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

const Stack = createNativeStackNavigator();
const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ContadorScreen} />
        <Stack.Screen name="Screen 2" component={Screen2} />
        <Stack.Screen name="Screen 3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStackNavigation;
const styles = StyleSheet.create({});
