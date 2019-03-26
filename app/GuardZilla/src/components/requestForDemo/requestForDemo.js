import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View,
    TextInput,
    Button,
    Switch,
}
    from 'react-native';
//import stylesOfLogin from './loginStyles';

class RequestForDemo extends Component {
    render() {
        return (
           
                <View style={stylesOfRequest.container}>
                 
                    <View style={{ height: 300, width: "100%", alignItems:"center" }} >
                        <TextInput multiline={true} numberOfLines={5} style={stylesOfRequest.txtComment} placeholder="توضیحات" />
                        <Switch  value={true} />
                        <Switch  value={true} />
                        <Button color="#15A085" width="20%" style={stylesOfRequest.btn} title="ثبت" onPress={() => { }} />
                    </View>
                </View>
           
        );
    }
}

export default RequestForDemo;
const stylesOfRequest = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#51B6A4',
        flex: 1,
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
    txtComment: {
        fontSize: 12,
        textAlign: 'right',
        backgroundColor: '#FEFEFE',
        borderWidth: 3,
        borderColor: '#FEFEFE',
        width: '80%',
        height: '40%',
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 2,
    },
    
    btn: {
        width: '20%',
        fontFamily: 'IRANSansMobile',
    }
});


