import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import RefillHeader from '../components/refillHeader/refillHeader';
import SwipePanel from '../components/swipePanel/swipePanel';
import { styles } from './styles/scanProduct';

const ScanProduct = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <RefillHeader showFlag = {false} />
            <SwipePanel />

            <Text>scan product page</Text>
        </SafeAreaView>
    )
}

export default ScanProduct;