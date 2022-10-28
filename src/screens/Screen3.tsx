import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FabButton from '../components/FabButton';

interface Screen3Props {}

const Screen3 = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Screen3</Text>
      <View style={styles.viewButtonsNavigate}>
        <FabButton
          onPress={() => navigator.goBack()}
          propStyle={styles.buttonGoBack}
          text="Go Back"
        />
        <FabButton
          onPress={() => navigator.navigate('Home')}
          propStyle={styles.buttonGoBack}
          text="Go Home"
        />
      </View>
    </View>
  );
};

export default Screen3;

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
