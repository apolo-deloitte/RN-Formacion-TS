import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import FabButton from '../components/FabButton';

interface Screen2Props extends NativeStackScreenProps<any, any> {}

const Screen2 = (props: Screen2Props) => {
  const [contador, setContador] = useState(0);
  const {navigation} = props;
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Screen2</Text>
      <View style={styles.viewButtonsNavigate}>
        <FabButton
          onPress={() => navigation.goBack()}
          propStyle={styles.buttonGoBack}
          text="Go Back"
        />
        <FabButton
          onPress={() => navigation.navigate('Screen 3')}
          propStyle={styles.buttonGoBack}
          text="Go Screen 3"
        />
      </View>
    </View>
  );
};

export default Screen2;

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
  buttonGoBack: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 125,
    heigth: 5,
  },
  viewButtonsNavigate: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
