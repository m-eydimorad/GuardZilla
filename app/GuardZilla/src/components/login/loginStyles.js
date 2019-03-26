import { StyleSheet } from 'react-native'
const stylesOfLogin = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#51B6A4',
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
    txtUserName:{
        fontSize:12,
        textAlign:'right',
        backgroundColor:'#FEFEFE',
        borderWidth:3,
        borderColor:'#FEFEFE',
        width:'80%',
        marginRight:5,
        marginLeft:5,
        marginBottom:2,
    },
    txtPassword:{
        fontSize:12,
        textAlign:'right',
        backgroundColor:'#FEFEFE',
        borderColor:'#FEFEFE',
        borderWidth:3,
        width:'80%',
        marginRight:5,
        marginLeft:5,
        marginBottom:8,
    },
    txt:{
        fontSize:20,
        textAlign:'right',
        fontFamily: 'IRANSansMobile',
    },
    btn:{
        width:'20%',
        fontFamily: 'IRANSansMobile',
    }
});
export default stylesOfLogin;


