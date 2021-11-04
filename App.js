import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { appStyles } from './style/app.style'


export default class App extends Component {
  render() {
    return (
      <View style={appStyles.header}>
        <View style={appStyles.quadrado1}></View>
        {/* <View style={appStyles.quadrado2}></View>
        <View style={appStyles.quadrado3}></View> */}
      </View>
    );
  }
}
