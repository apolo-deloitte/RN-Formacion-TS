import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import React from 'react';
import {View, Image} from 'react-native';
/* import ContadorScreen from '../screens/ContadorScreen'; */
import Screen2 from '../screens/Screen2';
import MainStackNavigation from './MainStackNavigation';
import useravatar from '../assets/images/avatar-placeholder.png';
import FabButton from '../components/FabButton';
import SettingScreen from '../screens/SettingScreen';

const Drawer = createDrawerNavigator();

const SideBarMenu = () => {
  /* 
    RECORDAR HACERLO CUANDO PODAMOS ARRANCAR APP
    <Drawer.Navigator drawerType={ width>= 768 ? 'permanent' : 'front' }
    drawerContent={(props) => <MenuPersonalize {...props}/>}
    >
    */
  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={props => <MenuPersonalize {...props} />}>
      <Drawer.Screen name="Home" component={MainStackNavigation} />
      <Drawer.Screen name="Screen 2" component={Screen2} />
      {/* SettingScreen */}
      <Drawer.Screen name="SettingScreen " component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default SideBarMenu;

const MenuPersonalize = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      <View>
        <Image
          source={{
            uri: useravatar,
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.menuContainer}>
        <FabButton
          propStyle={styles.menuBotton}
          text="Menu 1"
          onPress={() =>
            navigation.navigate('MainStackNavigation')
          }></FabButton>
        <FabButton
          propStyle={styles.menuBotton}
          text="Menu 2"
          onPress={() => navigation.navigate('Screen2')}></FabButton>
        <FabButton
          propStyle={styles.menuBotton}
          text="Menu 2"
          onPress={() => navigation.navigate('Setting Screen')}></FabButton>
      </View>
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  avatar: {
    width: 110,
    height: 110,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuBotton: {
    marginVertical: 10,
    fontSize: 20,
  },
});
