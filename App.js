import React, { Component } from "react";
import { View, Text, Button, Image, TextInput } from "react-native";
import { appStyles } from "./style/app.style";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {inputTexto: '', texto: ''};

    this.apertouBotao = this.apertouBotao.bind(this);
  }

  apertouBotao() {
    let result = this.state;

    if(result.inputTexto === 'Josan') {
      result.texto = 'Parabéns! Você acertou!';
    } else {
      result.texto = 'Você errou! Tente novamente.'
    }
    this.setState(result);
  }

  render() {
    return (
      <View style={{padding: 30}}>
        <TextInput
          style={appStyles.input}
          placeholder="Adivinhe meu NOME?"
          onChangeText={(inputTexto) => this.setState({inputTexto})}
        />
        <Button
          title="Sou um Botão"
          onPress={this.apertouBotao}
          style={appStyles.button}
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
