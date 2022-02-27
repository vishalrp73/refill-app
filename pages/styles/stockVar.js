import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    stockVarContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    headerText: {
        fontSize: 24,
        fontWeight: '400',
        marginTop: 25,
        marginLeft: 20,
        marginBottom: 25,
    },
    doneFooter: {
        height: 120,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end',
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
    },
    doneText: {
        fontSize: 18,
        fontWeight: '500',
    },
})