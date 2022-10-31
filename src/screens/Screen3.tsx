import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FabButton from '../components/FabButton';

interface Screen3Props {}
interface Props extends StackScreenProps<any, any> {}
const Screen3 = ({route}: StackScreenProps) => {
  const navigator = useNavigation();
  const params = route.params;
  console.log('PARAMS: ', params);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{params.name}</Text>
      <View style={styles.textStyle}>
        <Text style={styles.textDetailStyle}>HP: {params.hp}</Text>
        <Text style={styles.textDetailStyle}>Spice: {params.spice}</Text>
        <Text style={styles.textDetailStyle}>Type: {params.type}</Text>
        <Text style={styles.textDetailStyle}>Attack: {params.attack}</Text>
        <Text style={styles.textDetailStyle}>Defense: {params.defense}</Text>
      </View>
      <View style={styles.viewButtonsNavigate}>
        <FabButton
          onPress={() => navigator.goBack()}
          propStyle={styles.buttonGoBack}
          text="Go Back"
        />
        <FabButton
          onPress={() => navigator.popToTop()}
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
    textTransform: 'capitalize',
  },
  textDetailStyle: {
    fontSize: 35,
    color: 'black',
    justifyContent: 'center',
    textTransform: 'capitalize',
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
