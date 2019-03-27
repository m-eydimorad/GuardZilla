import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import styles from '../../styles/appStyles';
import { Container, Content, Item, Label, Input, Icon, Button, Root, Toast } from 'native-base'
import MyHeader from '../../src/components/myHeader/myHeader'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            username: false,
            errorpassword: false
        };
    }
    render() {

        return (
            <Container>
                <MyHeader title="صفحه ورود" />
                <Content style={styles.content} >
                    <View style={styles.formview} >
                        <Image resizeMode='stretch' source={require('../../assets/images/Logo-Fa.png')} style={styles.logo} />
                        <View style={styles.line} />
                        <Item floatingLabel style={{ flexDirection: 'row-reverse', marginTop: 15 }} >
                            <Label style={styles.label} >نام کاربری</Label>
                            <Input style={styles.label}
                                value={this.state.username}
                                onChangeText={(txt) => {
                                    this.setState({
                                        username: txt,
                                        errorusername: false
                                    })
                                }}
                            />
                            <Icon name="person" />
                        </Item>
                        {this.state.errorusername ? (
                            <Text style={{ color: "#f00", fontSize: 12, fontFamily: "IRANSansMobile", marginTop: 5 }} >
                                فرمت نام کاربری اشتباه است
              </Text>
                        ) : (null)}

                        <Item floatingLabel style={{ flexDirection: 'row-reverse', marginTop: 15 }} >
                            <Label style={styles.label} > رمز عبور</Label>
                            <Input secureTextEntry={true} style={styles.label}
                                value={this.state.password}
                                onChangeText={(txt) => {
                                    this.setState({
                                        password: txt,
                                        errorpassword: false
                                    })
                                }}
                            />
                            <Icon name="lock" />
                        </Item>
                        {this.state.errorpassword ? (
                            <Text style={{ color: "#f00", fontSize: 12, fontFamily: "IRANSansMobile", marginTop: 5 }} >
                                رمز عبور اشتباه است    </Text>
                        ) : (null)}
                        <Button full style={styles.btnsignin}
                            onPress={this.signin.bind(this)}
                        >
                            <Text style={[styles.label, { color: "#E1F5FE", fontSize: 15 }]} >ورود</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }

    signin() {
        var user = this.state.username;
        var pass = this.state.password;
        if (user.length < 5 || pass.length < 5) {
            if (user.length < 5) {
                this.setState({
                    errorusername: true
                });
            }
            if (pass.length < 5) {
                this.setState({
                    errorpassword: true
                });
            }
        }
    }
}

export default Login;


