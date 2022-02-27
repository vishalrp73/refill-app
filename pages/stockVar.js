import React from 'react';
import { styles } from './styles/stockVar';

import { SafeAreaView, Text, View, Pressable} from 'react-native';

import ProductPanel from '../components/productPanel/productPanel';

const StockVar = () => {
    return (
        <SafeAreaView style = {styles.stockVarContainer}>

            <Text style = { styles.headerText }>Stock Variance Items</Text>
            { /* Map number of stock variance array items */}
            <ProductPanel dots = {false} />
            <ProductPanel dots = {false} />
            <ProductPanel dots = {false} />

            <View style = {styles.doneFooter}>
                <Pressable style = {styles.doneBtn}
                    onPress = {() => console.log('Confirm btn pressed, list to be sent back to db to drop rows')} >
                        <Text style = {styles.doneText} >Confirm</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default StockVar;