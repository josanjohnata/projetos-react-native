import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class App extends Component {
  render() {
    const name = 'Josan Johnata';

    return (
      <View>
        <Text>
          Olá! Meu nome é {name}!
        </Text>
        <Button title="Aperte" onPress={() => {
          alert('Me apertou! ;)')
        }} />
      </View>
    );
  }
}
