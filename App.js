import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { appStyles } from './style/app.style'

class Janta extends Component {

  constructor(props) {
    super(props);
    this.state = {comida: props.comida};
    let comidas = ['Pizza', 'Lasanha', 'Burger', 'Sopa', 'Salada', 'Arroz'];

    setInterval(() => {
      this.setState(previousState => {
        let number = Math.floor(Math.random() * comidas.length);

        return {comida: comidas[number]};
      });
    }, 1000);
  }
  render() {
    return (
      <View >
        <Text style={appStyles.header}>Hoje você vai jantar:</Text>
        <Text style={appStyles.text}>{this.state.comida}</Text>
      </View>
    );
  }
}


export default class App extends Component {
  render() {
    return (
      <View style={appStyles.headerTop}>
        <Janta comida='Cuscuz' />
        <View style={appStyles.quadrado1}></View>
        <View style={appStyles.quadrado2}></View>
        <View style={appStyles.quadrado3}></View>
      </View>
    );
  }
}
