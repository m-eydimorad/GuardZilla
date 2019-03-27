import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View,
    TextInput,
    Button,
}
    from 'react-native';
//import stylesOfLogin from './loginStyles';
//import Header from './src/component/header/header';

class EnvironmentStatus extends Component {
    render() {
        return (

            <View style={stylesOfLogin.container} >
                <Text>صفحه اصلی</Text>
            </View>

        );
    }
}

export default EnvironmentStatus;
const stylesOfLogin = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#51B6A4',
        width: '80%'
    },
});