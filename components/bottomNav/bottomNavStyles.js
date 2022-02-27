import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    bottomNavContainer: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0ABBBB',
    },
    menuContainer: {
        width: '80%',
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'space-between',
    },
    imgContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 20,
        height: 20,
    },
    bottomNavText: {
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 10,
    },
});