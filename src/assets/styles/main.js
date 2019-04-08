import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1:{
        fontSize:30
    },
    input:{
        width: 300,
        fontSize:15,
        padding: 15,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: 'coral',
        margin: 10
    },
    buttonView:{
        width: 300,
        alignItems: 'flex-end'
    },
    button:{
        width: 100,
        marginTop: 10,
        borderRadius: 100,
        alignItems: 'center',
        backgroundColor: 'brown'
    },
    buttonText: {
        padding: 10,
        color: 'white'
    }
});

export default styles;