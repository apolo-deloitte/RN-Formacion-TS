import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

interface FabProps {
  onPress: () => void;
  propStyle?: object;
  text: string;
}

const FabButton = ({onPress, propStyle, text}: FabProps) => {
  return (
    <TouchableOpacity style={[styles.btn, propStyle]} onPress={onPress}>
      <Text style={styles.button_text_fab}>{text}</Text>
    </TouchableOpacity>
  );
};

export default FabButton;

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: '#5856D6',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 100,
    width: 60,
    height: 60,
  },
  button_text_fab: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
  },
});
