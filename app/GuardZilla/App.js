/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,
  TextInput,
  Button,
} 
from 'react-native';
import styles from './AppStyles';

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
      <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to GuardZilla :)</Text>
      <Text style={styles.welcome}>اعلام وضعیت نتسا در سرور تست</Text>
      
      <TextInput style={styles.txtUserName} placeholder="نام کاربری ایرانت"   />
      <TextInput style={styles.txtPassword} placeholder="رمز عبور" secureTextEntry={true}   />
      <Button color="#15A085"  style={styles.btn} title="ورود" />
      </View>
    );
  }
}


