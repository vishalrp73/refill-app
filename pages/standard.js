import React from 'react';
import { styles } from './styles/standard';
import { SafeAreaView, Text } from 'react-native';
import RefillMenu from '../components/refillMenu/refillMenu';

const Standard = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <RefillMenu />
        </SafeAreaView>
    )
}

export default Standard;