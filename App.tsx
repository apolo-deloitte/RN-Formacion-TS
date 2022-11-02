import 'react-native-gesture-handler';
import React from 'react';
import MainStackNavigation from './src/navigation/MainStackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import SideBarMenu from './src/navigation/SideBarMenu';

const App = () => {
  return (
    <NavigationContainer>
      <SideBarMenu></SideBarMenu>
    </NavigationContainer>
  );
};

export default App;
