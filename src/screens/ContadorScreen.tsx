import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import FabButton from '../components/FabButton';

interface ContadorScreenProps {}

const ContadorScreen = (props: ContadorScreenProps) => {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>ContadorScreen {contador}</Text>
      <FabButton
        onPress={() => setContador(contador - 1)}
        state={contador}
        propStyle={styles.buttonLeft}
        text="-1"
      />
      <FabButton
        onPress={() => setContador(contador + 1)}
        state={contador}
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
    color: 'black',
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
});
