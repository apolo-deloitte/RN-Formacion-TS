import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface ContadorScreenProps {}

const ContadorScreen = (props: ContadorScreenProps) => {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>ContadorScreen {contador}</Text>
      <TouchableOpacity
        style={[styles.btn, styles.buttonRight]}
        onPress={() => setContador(contador + 1)}>
        <Text style={styles.button_text_fab}>+1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, styles.buttonLeft]}
        onPress={() => setContador(contador - 1)}>
        <Text style={styles.button_text_fab}>-1</Text>
      </TouchableOpacity>
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
  btn: {
    alignItems: 'center',
    backgroundColor: '#5856D6',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 100,
    width: 60,
    height: 60,
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
  button_text_fab: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
  },
});
