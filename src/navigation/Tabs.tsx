import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabs1Screen from '../screens/Tabs1Screen';
import Tabs2Screen from '../screens/Tabs2Screen';
import Tabs3Screen from '../screens/Tabs3Screen';
import MainStackNavigation from './MainStackNavigation';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const selectIconTabBar = (color, name) => {
    let iconName: string = '';
    switch (name) {
      case 'Tab 1':
        iconName = 'T1';
        break;
      case 'Tab 2':
        iconName = 'T2';
        break;
      case 'Tab 3':
        iconName = 'T3';
        break;
      case 'MainStackNavigation':
        iconName = 'T4';
        break;
      default:
        break;
    }
    return <Text style={{color}}>{iconName}</Text>;
  };

  return (
    /* 
    Controlador de la navegacion para los Tabs
    */
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          return selectIconTabBar(color, route.name);
        },
      })}>
      <Tab.Screen name="Tab 1" component={Tabs1Screen} />
      <Tab.Screen name="Tab 2" component={Tabs2Screen} />
      <Tab.Screen name="Tab 3" component={Tabs3Screen} />
      <Tab.Screen
        name="MainStackNavigation"
        options={{headerTitle: 'Stack Prin App Contador'}}
        component={MainStackNavigation}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
