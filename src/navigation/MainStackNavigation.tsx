import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContadorScreen from '../screens/ContadorScreen';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import {Pokemon} from '../model/PokemonModel';
import SettingScreen from '../screens/SettingScreen';

//El siguiente tipado nos obligara a mantener la estructura que definamos
//en todos los Stack.Screen que definamos mas tarde.
//Si queremos añadir una Screen nueva tendremos que recordar añadirlo
//en este objeto también.
export type RootStackParams = {
  MainStackNavigation: undefined;
  ContadorScreen: undefined;
  Screen2: undefined;
  Screen3: Pokemon;
  SettingScreen: undefined;
};
const Stack = createNativeStackNavigator();
const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Group
        screenOptions={{
          headerStyle: {backgroundColor: 'papayawhip'},
          contentStyle: {
            backgroundColor: 'black',
          },
        }}>
        <Stack.Screen name="Home 2" component={ContadorScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerStyle: {backgroundColor: 'black'},
          headerTitleStyle: {color: 'white'},
          headerTintColor: 'white',
          contentStyle: {
            backgroundColor: 'papayawhip',
          },
        }}>
        <Stack.Screen
          options={{title: 'Screen 2'}}
          name="Screen 2"
          component={Screen2}
        />
        <Stack.Screen
          options={{title: 'Screen 3'}}
          name="Screen 3"
          component={Screen3}
        />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default MainStackNavigation;
const styles = StyleSheet.create({});
