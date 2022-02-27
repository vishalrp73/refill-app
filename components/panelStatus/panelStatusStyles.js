import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    panelContainer: {
        width: '100%',
        height: 80,
        backgroundColor: '#E0EEFF',
        flexDirection: 'row',
        marginTop: 2.5,
        marginBottom: 2.5,
    },
    prodImgContainer: {
        width: 80,
        height: 80,
    },
    prodImg: {
        width: 80,
        height: 80,
    },
    prodInfoContainer: {
        width: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    prodAisle: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 5,
    },
    barcodeContainer: {
        width: 100,
        height: 35,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    barcodeImg: {
        width: '80%',
        height: 20
    },
    switchContainer: {
        marginTop: 30,
        marginLeft: 50,
    },
});