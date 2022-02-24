import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    menuContainer: {
        width: 250,
        flex: 1,
        flexDirection: 'row',
        margin: 25
    },
    urgentBtn: {
        width: 100,
        height: 40,
        backgroundColor: '#FF9090',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 3,
        shadowOpacity: 0.5,
    },
    standardBtn: {
        width: 150,
        height: 40,
        backgroundColor: '#E0EEFF',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 3,
        shadowOpacity: 0.5,
    },
    menuText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500'
    }
})