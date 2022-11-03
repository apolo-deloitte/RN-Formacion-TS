import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import {View, Image, StyleSheet, Text} from 'react-native';
/* import ContadorScreen from '../screens/ContadorScreen'; */
import Screen2 from '../screens/Screen2';
import MainStackNavigation from './MainStackNavigation';
import SettingScreen from '../screens/SettingScreen';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const Drawer = createDrawerNavigator();

const SideBarMenu = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator drawerContent={props => <MenuPersonalize {...props} />}>
      <Drawer.Screen
        name="MainStackNavigation"
        options={{title: 'Home'}}
        component={MainStackNavigation}
      />
      <Drawer.Screen
        name="Screen2"
        options={{title: 'Screen2'}}
        component={Screen2}
      />
      <Drawer.Screen
        name="SettingScreen"
        options={{title: 'SettingScreen'}}
        component={SettingScreen}
      />
    </Drawer.Navigator>
  );
};

export default SideBarMenu;

const MenuPersonalize = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={require('../assets/images/avatar-placeholder.png')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.menuButton}>
        <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('MainStackNavigation')}>
          MainStackNavigation
        </Text>
        <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('Screen2')}>
          Screen2
        </Text>
        <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('SettingScreen')}>
          Setting Screen
        </Text>
      </View>
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
    alignItems: 'flex-start',
  },
  textButton: {
    color: '#25B8EB',
    fontWeight: '400',
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 20,
  },
});
