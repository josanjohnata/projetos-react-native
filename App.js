import React, { Component } from "react";
import { View, Text, Button, Image, TextInput } from "react-native";
import { appStyles } from "./style/app.style";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {texto: ''};

    this.changeText = this.changeText.bind(this);
  }

  changeText(text) {
    let result = this.state;

    if(text.length > 0) {
      result.texto = `Olá, ${text}`;
    } else {
      result.texto = '';
    }
    this.setState(result);

  }
  render() {
    return (
      <View style={{padding: 30}}>
        <TextInput
          style={appStyles.input}
          placeholder="Digite seu NOME?"
          onChangeText={this.changeText}
        />
        <Text
          style={appStyles.text}          
        >
          {this.state.texto}
        </Text>
      </View>
    );
  }
}
