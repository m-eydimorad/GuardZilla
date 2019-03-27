import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import {Header,Title} from 'native-base';

class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Header androidStatusBarColor="#EC407A" style={{
                backgroundColor: "#F06292",
                height: 40,
                alignItems: 'center'
            }} >
                <Title style={{ fontFamily: 'A Sogand', fontSize: 22, color: '#E1F5FE' }} >
                   {this.props.title}
                </Title>
            </Header>
        );
    }
}

export default MyHeader;


