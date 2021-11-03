import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

class ImageComponent extends Component {
  render() {
    const image = {
      uri:'https://conteudo.imguol.com.br/c/entretenimento/c3/2017/11/24/'+this.props.nome+'-einstein-1511565360545_v2_450x337.jpg.webp'
    }
    
    return (
      <image source={image} style={{width: 300, height: 300}} />
    );
  }
}

export default class App extends Component {
  render() {
    const name = 'Josan Johnata';

    return (
      <View>
        <Text style={{fontSize:25, color: 'pink', marginTop: 20, marginBottom: 20}}>
          Olá! Meu nome é {name}!
        </Text>
        <Button title="Aperte" onPress={() => {
          alert('Me apertou! ;)')
        }} />

        <ImageComponent nome="albert" />

      </View>
    );
  }
}
