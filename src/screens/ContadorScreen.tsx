import {DrawerScreenProps} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FabButton from '../components/FabButton';

/* interface ContadorScreenProps extends NativeStackScreenProps<any, any> {} */

interface ContadorScreenProps extends DrawerScreenProps<any, any> {}

const ContadorScreen = ({navigation}: ContadorScreenProps) => {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>ContadorScreen {contador}</Text>
      <FabButton
        onPress={() => navigation.navigate('Screen 2', {})}
        propStyle={styles.buttonGoScreen2}
        text="Go Screen 2"
      />
      <FabButton
        onPress={() => setContador(contador - 1)}
        propStyle={styles.buttonLeft}
        text="-1"
      />
      <FabButton
        onPress={() => setContador(contador + 1)}
        propStyle={styles.buttonRight}
        text="+1"
      />
    </View>
  );
};

export default ContadorScreen;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
  },
  buttonRight: {
    bottom: 25,
    right: 25,
    position: 'absolute',
  },
  buttonLeft: {
    bottom: 25,
    left: 25,
    position: 'absolute',
  },
  buttonGoScreen2: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 125,
    heigth: 5,
  },
});
