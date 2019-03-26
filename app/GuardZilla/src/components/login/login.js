import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View,
    TextInput,
    Button,
}
    from 'react-native';
//import stylesOfLogin from './loginStyles';

class Login extends Component {
    render() {
        return (
           
           
                <View style={stylesOfLogin.container}>
                    <Text style={stylesOfLogin.welcome}>Welcome to GuardZilla :)</Text>
                    <Text style={stylesOfLogin.welcome}>اعلام وضعیت نتسا در سرور تست</Text>
                    <View style={{ height: 300, width: "100%" }} >
                        <TextInput style={stylesOfLogin.txtUserName} placeholder="نام کاربری ایرانت" />
                        <TextInput style={stylesOfLogin.txtPassword} placeholder="رمز عبور" secureTextEntry={true} />
                        <Button color="#15A085" width="20%" style={stylesOfLogin.btn} title="ورود" onPress={() => { }} />
                    </View>
                </View>
           
        );
    }
}

export default Login;
const stylesOfLogin = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#51B6A4',
        width: '80%'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    txtUserName: {
        fontSize: 12,
        textAlign: 'right',
        backgroundColor: '#FEFEFE',
        borderWidth: 3,
        borderColor: '#FEFEFE',
        width: '80%',
        height: '15%',
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 2,
    },
    txtPassword: {
        fontSize: 12,
        textAlign: 'right',
        backgroundColor: '#FEFEFE',
        borderColor: '#FEFEFE',
        borderWidth: 3,
        width: '80%',
        height: '15%',
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 8,
    },
    txt: {
        fontSize: 20,
        textAlign: 'right',
        fontFamily: 'IRANSansMobile',
    },
    btn: {
        width: '20%',
        fontFamily: 'IRANSansMobile',
    }
});


