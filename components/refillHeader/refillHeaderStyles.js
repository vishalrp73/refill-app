import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        backgroundColor: 'white',
        height: 100,
        flexDirection: 'row'
    },
    flagIcon: {
        width: 60,
        height: 60,
        backgroundColor: '#F6F6F6',
        borderRadius: 60,
        marginTop: 15,
        marginRight: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        shadowOpacity: 0.5,
    },
    flagImg: {
        width: 20,
        height: 20,
    },
})