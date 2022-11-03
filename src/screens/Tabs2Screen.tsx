import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const Tabs2Screen = () => {
  useEffect(() => {
    console.log('Tab 2 useEffect');
  });
  return (
    <View style={{}}>
      <Text>Tabs2 Screen</Text>
    </View>
  );
};

export default Tabs2Screen;
