import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    list:{
        padding: 20
    },
    productContainer:{
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    productTitle:{
        fontSize: 18,
        fontWeight: 'normal',
        color: '#037171'
    },
    productDescription:{
        fontSize: 16,
        color: '#00B9AE',
        marginTop: 5,
        lineHeight: 24
    },
    productButton:{
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#037171",
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    productButtonText:{
        fontSize: 16,
        color: '#037171',
        fontWeight: 'bold'
    }
});

export default styles;