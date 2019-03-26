
import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View

}
  from 'react-native';
import styleOfApp from './AppStyles';
import Login from './src/components/login/login';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styleOfApp.container}>
         <Login />
      </View>
    );
  }
}


