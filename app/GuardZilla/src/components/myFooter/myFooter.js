import React, { Component } from 'react';
//import styles from '../../styles/appStyles';
import { Platform, StyleSheet } from 'react-native';
import { Icon, Button, Footer, FooterTab } from 'native-base';

class MyFooter extends Component {
    render() {
        return (
            <Footer style={{ height: 35 }}>
                <FooterTab style={{ backgroundColor: "#0ff" }}>
                    <Button onPress={() => navigate('Home')}>
                        <Icon style={{ color: '#000' }} name="home" />
                    </Button>
                    <Button onPress={() => navigate('RequestForLock')}>
                        <Icon style={{ color: '#000' }} name="lock" />
                    </Button>
                    <Button onPress={() => navigate('Help')}>>
                         <Icon style={{ color: '#000' }} name="help-circle" />
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default MyFooter;