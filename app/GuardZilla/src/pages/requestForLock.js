import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Platform, StyleSheet, Text, View, Image, Switch } from 'react-native';
import styles from '../../styles/appStyles';
import { Container, Content, Item, Label, Input, Icon, Button, Root, Toast, Textarea } from 'native-base'
import MyHeader from '../../src/components/myHeader/myHeader'

class RequestForLock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            switchValue: false,
            userId: "",
            userName: "",
            firstName: "",
            lastName: "",
        };

        AsyncStorage.getItem('userName', (error, result) => {
            let userName = JSON.parse(result);
            this.setState({
                userName: userName,
            })
        });


        AsyncStorage.getItem('firstName', (error, result) => {
            let firstName = JSON.parse(result);
            this.setState({
                firstName: firstName,
            })
        });

        AsyncStorage.getItem('lastName', (error, result) => {
            let lastName = JSON.parse(result);
            this.setState({
                lastName: lastName,
            })

        });
        AsyncStorage.getItem('userId', (error, result) => {
            let userId = JSON.parse(result);
            this.setState({
                userId: userId,
            })
            this.getUserLockByUserIdEnvId(this.state.userId);
        });

    }

    toggleSwitch = (value) => {
        this.setState({ switchValue: value });
        console.log('toggle');
    }


    render() {

        return (
            <Root>
                <Container>
                    <MyHeader title="درخواست Lock/UnLock" />
                    <Content style={styles.content} >
                        <View style={styles.formview}>
                            <Item style={{ flexDirection: 'row-reverse', marginTop: 15 }}>
                                <Label style={styles.label} >{"کاربر گرامی : " + this.state.firstName + " " + this.state.lastName}</Label>
                            </Item>
                        </View>
                        <View style={styles.formview} >
                            <Item style={{ flexDirection: 'row-reverse', marginTop: 15 }} >
                                <Label style={styles.label} >توضیحات: </Label>
                                <Textarea style={styles.label}
                                    value={this.state.comment}
                                    onChangeText={(txt) => {
                                        this.setState({
                                            comment: txt,
                                        })
                                    }}
                                />
                            </Item>
                            <Item style={{ flexDirection: 'row-reverse', marginTop: 15 }} >
                                <Label style={styles.label} > :Lock/UnLock </Label>
                                <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue} />
                            </Item>

                            <Button full style={styles.btnsignin}
                                onPress={this.saveStatus.bind(this)}
                            >
                                <Text style={[styles.label, { color: "#E1F5FE", fontSize: 15 }]} >ذخیره</Text>
                            </Button>

                        </View>
                    </Content>
                </Container>
            </Root>
        );
    }

    userUnLock() {
        let requestModel = JSON.stringify({
            userid: this.state.userId,
            environmentid: 1,
            comment: this.state.comment
        })
        console.log('userunlock'+requestModel);
        fetch('http://sm.isc.iranet.net/userlock/', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: requestModel
        })
            .then((response) => JSON.stringify(response.json()))
            .then((responseData) => {
                if (responseData)
                    Toast.show({
                        text: "محیط تست باز شد",
                        type: 'success',
                        textStyle: { fontFamily: "IRANSansMobile", fontSize: 12 },
                        duration: 3000
                    })
            })
            .catch((err) => { console.log(err); });;
    }

    userLock() {
        let requestModel = JSON.stringify({
            UserId: this.state.userId,
            EnvironmentId: 1,
            Comment: this.state.comment
        })
        console.log('userlock'+requestModel);
        
        fetch('http://sm.isc.iranet.net/userlock', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: requestModel
        })
            .then((response) => JSON.stringify(response.json()))
            .then((responseData) => {
                Toast.show({
                    text: "محیط تست قفل شد",
                    type: 'success',
                    textStyle: { fontFamily: "IRANSansMobile", fontSize: 12 },
                    duration: 3000
                })
            })
            .catch((err) => { console.log(err); });
    }

    getUserLockByUserIdEnvId(userId) {
        fetch('http://sm.isc.iranet.net/userlock/' + userId + '/1')
            .then((response) => response.json())
            .then(responseJson => {
                if (responseJson != null && responseJson != "") {
                    this.setState({
                        comment: responseJson.Comment,
                        switchValue: true,
                    })
                }
                else {
                    this.setState({
                        comment: "",
                        switchValue: false,
                    })
                }
            })
            .catch((error) => {
                console.error(error);
            })
    }

    saveStatus() {
        var comment = this.state.comment;
        var envStatus = this.state.switchValue;
        if (envStatus == true) {
            this.userLock();

        }
        else if (envStatus == false) {
            this.userUnLock();
        }
    }
}

export default RequestForLock;


