import React, { Component } from 'react';
import styles from '../../styles/appStyles';
import {
    Platform, StyleSheet, Text, View,Switch,
    TextInput,
} from 'react-native';
import { Container, Content, Item, Label, Input, Icon, Button, Root, Toast, Footer,List, ListItem,FooterTab } from 'native-base'
import MyHeader from '../../src/components/myHeader/myHeader'


class EnvironmentStatus extends Component {
    constructor (props){
        super(props);
        this.state = {
            switchValue: false,
        }

    }
    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
    }
    render() {
        const {navigate} = this.props.navigation;
        
        return (
            <Root>
                <MyHeader title="امکانات این App" />
                <Container>

                    <Content style={styles.content} >

                        <View style={styles.formview} >

                            {/* <Item style={{ flexDirection: 'row-reverse', marginTop: 15 }} >
                                <Label style={styles.label} > :Lock/UnLock </Label>
                                <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue} />
                            </Item> */}

                        </View>
                        <List style={{marginTop: 20}}>
                            <ListItem >
                                <Text>درخواست قفل شدن سرور تستی</Text>
                            </ListItem>
                            <ListItem>
                                <Text>مشاهده آخرین درخواست خود</Text>
                            </ListItem>
                            <ListItem>
                                <Text></Text>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
                <Footer style={{height:35}}>
                    <FooterTab style={{backgroundColor:"#0ff"}}>
                        <Button onPress={() => navigate('Home')}>
                            <Icon style={{color:'#000'}} name="home" />
                        </Button>
                        <Button onPress={() => navigate('RequestForLock')}>
                            <Icon style={{color:'#000'}} name="lock" />
                        </Button>
                        <Button onPress={() => navigate('Help')}>>
                            <Icon style={{color:'#000'}} name="help-circle" />
                        </Button>
                    </FooterTab>
                </Footer>
            </Root>
        );
    }
}
export default EnvironmentStatus;

