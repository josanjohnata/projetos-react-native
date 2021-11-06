import React, { Component } from "react";
import { View, Text, Button, Image, TextInput } from "react-native";
import { appStyles } from "./src/style/app.style";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { texto1: 'Faça seu mimimi', texto2: '' };

    this.escrever = this.escrever.bind(this);
  }

  mudarVogais(text) {
    let newText = text.toLowerCase();
    newText = newText.replace(/(a|e|i|o|u)/g, 'i');
    newText = newText.replace(/(á|à|ã|â)/g, 'i');
    newText = newText.replace(/(é|è|ẽ|ê)/g, 'i');
    newText = newText.replace(/(í|ì|ĩ|î)/g, 'i');
    newText = newText.replace(/(ó|ò|õ|ô)/g, 'i');
    newText = newText.replace(/(ú|ù|ũ|û)/g, 'i');
    return newText;
  }

  escrever(text) {
    let message = this.state;
    message.texto1 = text;
    message.texto2 = this.mudarVogais(text);
    this.setState(message);
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {inputTexto: '', texto: ''};

  //   this.apertouBotao = this.apertouBotao.bind(this);
  // }

  // apertouBotao() {
  //   let result = this.state;

  //   if(result.inputTexto === 'Josan') {
  //     result.texto = 'Parabéns! Você acertou!';
  //   } else {
  //     result.texto = 'Você errou! Tente novamente.'
  //   }
  //   this.setState(result);
  // }

  render() {
    return (
      <View style={appStyles.body}>
        {/* <TextInput
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
        </Text> */}

        {/* Projeto Gerador de memes - para praticar o que foi estudado até agora */}
        <View>
          <Text style={appStyles.header}>Criador de Mimimi</Text>
          <View style={appStyles.inputArea}>
            <TextInput
              style={appStyles.input}
              placeholder="Digite seu Mimimi"
              onChangeText={this.escrever}
            />
          </View>
          <View style={appStyles.area}>
            <Text style={[appStyles.texto, appStyles.texto1]}>{this.state.texto1.toUpperCase()}</Text>
            <Image
              style={appStyles.image}
              source={require("./src/images/mimimi.jpg")}
            />
            <Text style={[appStyles.texto, appStyles.texto2]}>{this.state.texto2.toUpperCase()}</Text>
          </View>
        </View>
      </View>
    );
  }
}
