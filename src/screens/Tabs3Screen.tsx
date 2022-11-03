import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const Tabs3Screen = () => {
  useEffect(() => {
    console.log('Tab 3 useEffect');
  });

  return (
    <View style={{}}>
      <Text>Tabs3 Screen</Text>
    </View>
  );
};

export default Tabs3Screen;
