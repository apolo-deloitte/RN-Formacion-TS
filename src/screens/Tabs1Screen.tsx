import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const Tabs1Screen = () => {
  useEffect(() => {
    console.log('Tab 1 useEffect');
  });
  return (
    <View style={{}}>
      <Text>Tabs1 Screen</Text>
    </View>
  );
};

export default Tabs1Screen;
