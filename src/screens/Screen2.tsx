import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, Image} from 'react-native';
import FabButton from '../components/FabButton';
import axios from 'axios';

interface Screen2Props extends NativeStackScreenProps<any, any> {}
interface Pokemon {
  name: string;
  img: string;
  hp: string;
  attack: string;
  defense: string;
  type: string;
}

const Screen2 = (props: Screen2Props) => {
  const {navigation} = props;

  const [pokemonName, setPokemonName] = useState('pikachu');
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon>();
  //Call POKEAPI request
  const handleSearchPokemon = () => {
    var data = null;
    console.log('POKEMON NAME: ', pokemonName);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        setPokemon({
          name: response.data.name,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          hp: response.data.stats[0].base_stat,
          img: response.data.sprites.front_default,
          type: response.data.types[0].type.name,
        });
        console.log('POKEMON DATA: ', response);
        console.log('pokemon img : ', pokemon?.img);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Busca tu pokemon</Text>
      <View style={styles.viewButtonsNavigate}>
        <TextInput
          style={styles.input}
          placeholder="Escriba el nombre de un pokemon..."
          onChange={event => setPokemonName(event.target.value)}
        />
        <FabButton
          onPress={() => handleSearchPokemon()}
          propStyle={styles.btnSearchAction}
          text="Buscar pokemon"
        />
        <FabButton
          onPress={() => navigation.goBack()}
          propStyle={styles.buttonNavigation}
          text="Go Back"
        />
        {pokemon && (
          <View style={styles.viewButtonsDetails}>
            <Image
              style={styles.tinyLogo}
              /* source={pokemon.img} */ source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <FabButton
              onPress={() => navigation.navigate('Screen 3', pokemon)}
              propStyle={styles.buttonNavigation}
              text={`Ver detalle de ${pokemonName}`}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: 'center',
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 35,
    color: 'black',
    textAlign: 'center',
  },
  buttonNavigation: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 250,
    heigth: 5,
    margin: 5,
  },
  btnSearchAction: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 180,
    heigth: 5,
    margin: 5,
    backgroundColor: '#FF6140',
  },
  viewButtonsNavigate: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 2,
  },
  viewButtonsDetails: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignSelf: 'center',
    flex: 3,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 15,
    width: 300,
    padding: 10,
  },
});
