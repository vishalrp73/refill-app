import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    statusContainer: {
        width: '100%',
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
    },
    statusHeader: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10,
    },
    prodTextContainer: {
        marginLeft: 20,
    },
    prodText: {
        fontSize: 20,
        fontWeight: '700',
    },
    statTextContainer: {
        marginLeft: 175,
    },
    statText: {
        fontSize: 20,
        fontWeight: '700',
    },
    productContainer: {
        width: '100%',
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 'auto',
    },
    doneBtn: {
        marginRight: 30,
        width: 100,
        height: 40,
        backgroundColor: '#0ABBBB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        shadowOpacity: 0.5,
        position: 'absolute',
        bottom: 50,
        right: 10,
        zIndex: 1,
    },
    doneText: {
        fontSize: 18,
        fontWeight: '500',
    },
})