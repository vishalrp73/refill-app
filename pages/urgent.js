import React from 'react';
import { styles } from  './styles/urgent';
import { SafeAreaView, View, Text, Pressable } from 'react-native';

import RefillMenu from '../components/refillMenu/refillMenu';

const Urgent = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.headerContainer}>
                <RefillMenu />
                <Pressable style = {styles.flagIcon} >
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

export default Urgent;