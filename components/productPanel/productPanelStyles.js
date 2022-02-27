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
    refillContainer: {
        width: 120,
        height: 60,
        borderRadius: 4,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
    },
    refillNumBox: {
        width: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 25,
        borderRadius: 4,
        fontSize: 16,
        fontWeight: '600'
    },
    refillDenomBox: {
        backgroundColor: '#E7E7E8',
        width: 58,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    refillDenomText: {
        fontWeight: '600',
        fontSize: 16,
    },
    threeDotsContainer: {
        height: '80%',
        marginTop: 'auto',
        marginRight: 15,
        marginBottom: 'auto',
        marginLeft: 'auto',
    },
    threeDotsImg: {
        width: 10,
        height: '100%'
    }
});