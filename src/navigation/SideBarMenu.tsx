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
import Tabs from '../navigation/Tabs';
import Screen3 from '../screens/Screen3';
const Drawer = createDrawerNavigator();

const SideBarMenu = () => {
  const {width} = useWindowDimensions();
  return (
    /* LOS NAVIGATOR son los controladores de las navegaciones por pantallas
    toda pantalla que no esté accesible por un flujo de un Navigator no será accesible */
    <Drawer.Navigator drawerContent={props => <MenuPersonalize {...props} />}>
      <Drawer.Screen
        name="Tabs"
        options={{
          title: 'Home',
          headerStyle: styles.headerStyles,
          headerTintColor: '#F5F8FA', //colores como los de ibercaja para ir haciendo app parecida
        }}
        component={Tabs}
        /* En este punto le estamos indicando que nos renderice
        los tabs que servirian de un nuevo Stack pero con tabs inferiores
        de navegacion. */
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
      <Drawer.Screen
        name="Screen 3"
        options={{title: 'Screen 3'}}
        component={Screen3}
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
        {/* <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('MainStackNavigation')}>
          MainStackNavigation
        </Text> */}
        <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('Tabs')}>
          Tabs
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
        {/* 
        Podemos hacer que aparezca en el menu Drawer pero
        si no tenemos datos para pasarle, los cuales ACTUALMENTE
        se lo pasamos desde Screen 2 no se renderizá el Screen 3
        <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('Screen 3')}>
          Screen 3
        </Text> */}
      </View>
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  headerStyles: {
    backgroundColor: '#0B7AD0',
  },
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
