import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import styles from '../../styles/appStyles';
import { Container, Content, Item, Label, Input, Icon, Button, Root, Toast } from 'native-base'
import MyHeader from '../../src/components/myHeader/myHeader'
import RequestForLock from '../../src/pages/requestForLock'
import GuardZillaCommon from './common';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userId: "",
            password: "",
            firstName: "",
            lastName: "",
            erroruserName: false,
            errorpassword: false,
            isLoggedIn: false,
        };

        // AsyncStorage.getItem('userName', (error, result) => {
        //     let userName = JSON.parse(result);
        //     if (userName != null)
        //        this.props.navigation.navigate('RequestForLock');
        //    // console.log(userName);
        //     // this.setState({
        //     //     userName: userName,
        //     // })
        // });

    }

    componentWillMount() {
        AsyncStorage.getItem('userName', (error, result) => {
            let userName = JSON.parse(result);
            this.setState({ isLoggedIn: userName != null });
        });


    }

    render() {
        const { navigate } = this.props.navigation;

        if (this.state.isLoggedIn) {
            return <RequestForLock />
        }
        else
            return (
                <Root>
                    <Container>
                        <MyHeader title="صفحه ورود" />
                        <Content style={styles.content} >
                            <View style={styles.formview} >
                                <Image resizeMode='stretch' source={require('../../assets/images/Logo-Fa.png')} style={styles.logo} />
                                <View style={styles.line} />
                                <Item floatingLabel style={{ flexDirection: 'row-reverse', marginTop: 15 }} >
                                    <Label style={styles.label} >نام کاربری</Label>
                                    <Input style={styles.label}
                                        value={this.state.userName}
                                        onChangeText={(txt) => {
                                            this.setState({
                                                userName: txt,
                                                erroruserName: false
                                            })
                                        }}
                                    />
                                    <Icon name="person" />
                                </Item>
                                {this.state.erroruserName ? (
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
                                    // onPress={() => navigate('Home')}
                                    onPress={this.signin.bind(this)}
                                >
                                    <Text style={[styles.label, { color: "#E1F5FE", fontSize: 15 }]} >ورود</Text>
                                </Button>
                            </View>
                        </Content>
                    </Container>
                </Root>
            );
    }


    getUserByUserName(user) {
        fetch(GuardZillaCommon.ApiPath + '/users/' + user)
            .then((response) => response.json())
            .then(responseJson => {
                if (responseJson != null && responseJson != "") {

                    this.setState({
                        userName: responseJson.Username,
                        userId: responseJson.Id,
                        firstName: responseJson.FirstName,
                        lastName: responseJson.LastName,
                    })

                    AsyncStorage.setItem('userId', JSON.stringify(this.state.userId));
                    AsyncStorage.setItem('userName', JSON.stringify(this.state.userName));
                    AsyncStorage.setItem('firstName', JSON.stringify(this.state.firstName));
                    AsyncStorage.setItem('lastName', JSON.stringify(this.state.lastName));
                    this.props.navigation.navigate('RequestForLock');

                } else {
                    alert('نام کاربری شما مجاز نیست');
                }
            })
            .catch((error) => {
                console.error(error);
            })
    }

    signin() {
        var user = this.state.userName;
        var pass = this.state.password;

        if (user.length < 5 || pass.length < 5) {
            if (user.length < 5) {
                this.setState({
                    erroruserName: true
                });
            }
            if (pass.length < 5) {
                this.setState({
                    errorpassword: true
                });
            }
        }
        else {
            this.getUserByUserName(user);
            //this.props.navigation.navigate('RequestForLock');
        }
    }
}

export default Login;


