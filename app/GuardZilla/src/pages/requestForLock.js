import React, { Component } from 'react';
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
        };

    }
    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
    }
    render() {

        return (
            <Root>
                <Container>
                    <MyHeader title="درخواست Lock/UnLock" />
                    <Content style={styles.content} >
                        <View style={styles.formview} >
                            <Item style={{ flexDirection: 'row-reverse', marginTop: 15 }} >
                                <Label style={styles.label} >توضیحات</Label>
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
                                <Label style={styles.label} > Lock/UnLock</Label>
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

    saveStatus() {
        var comment = this.state.comment;
        var envStatus = this.state.switchValue;
        if (envStatus == true) {
            alert(comment);
            Toast.show({
                text: "اطلاعات وارد شده  صحیح نمی باشد",
                type: 'danger',
                textStyle: { fontFamily: "IRANSansMobile", fontSize: 12 },
                duration: 3000
            })
        }
    }
}

export default RequestForLock;


