import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View,
    TextInput,
    Button,
}
    from 'react-native';
//import stylesOfLogin from './loginStyles';

class Header extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <View style={{ height: 50, flexDirection: 'row-reverse', backgroundColor: bg }}>
                <View style={{ flex: 2 }} >
                    <Image resizeMode='stretch' style={{ flex: 1 }} source={require('./images/fa.png')} />
                </View>
                <View style={{ flex: 5, justifyContent: 'center', paddingRight: 10 }} >
                    <Text style={{ fontFamily: 'A Sogand', fontSize: 22, color: "#fff" }} >
                        {this.props.title}
                    </Text>
                </View>
            </View>
        );
    }
}

export default Header;


