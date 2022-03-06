import React, { useState } from 'react';
import { SwipeActionView } from 'react-native-action-view';
import { Text, View, Image, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './swipePanelStyles';

const SwipePanel = (props) => {

    const navigation = useNavigation();
    // Set default to props amount from DB when built
    const [aisleNum, setAisleNum] = useState(1)
    const [refNum, setRefNum] = useState(0);
    const [refillDenom, setRefillDenom] = useState(100);
    const camera = require('../../assets/refillMenu/camera.png');

    const params = {
        GTIN: props.details.GTIN,
        productName: props.details.productName,
        productImage: props.details.productImage,
        warehouseStock: props.details.warehouseStock,
        minShelf: props.details.minShelf,
        employeeId: props.details.employeeId,
        amountScanned: props.details.amountScanned
    }

    return (
        <SwipeActionView rightExpansionSettings={{buttonIndex: 0, fillOnTrigger: false}} 
                        rightButtons={[
                            {title: 'GUIDE ME', color: '#0ABBBB', callback: () => console.log('guide me btn clicked')}, 
                            {title: 'SCAN', color: '#0ABBBB', callback: () => navigation.navigate('ScanProduct', params)}]}
                        style = {styles.panelContainer}
                        >
            <View style = {styles.prodImgContainer}>
                <Image style = {styles.prodImg}
                    source = {require('../../assets/refillMenu/coke.png')} />
            </View>

            <View style = {styles.prodInfoContainer}>
                <Text style = {styles.prodAisle}>{props.details.productName}</Text>
                <View style = {styles.barcodeContainer}>
                    <Image style = {styles.barcodeImg}
                        source = {require('../../assets/refillMenu/barcode.png')} />
                </View>
            </View>

            <View style = {styles.refillContainer}>
                <TextInput
                        onChangeText={(e) => setRefNum(e)}
                        keyboardType = 'number-pad'
                        placeholder = {`${props.details.minShelf}`}
                        style = { styles.refillNumBox }
                        returnKeyType='done' />
                <View style = {styles.refillDenomBox} >
                    <Text style = {styles.refillDenomText} >/{props.details.warehouseStock}</Text>
                </View>
            </View>

            {
                props.dots ? 
                        <Pressable onPress = {() => console.log('three dots btn pressed')}
                            style = {styles.threeDotsContainer}>
                                <Image style = {styles.threeDotsImg}
                                    source = {require('../../assets/refillMenu/three-dots.png')} />
                        </Pressable> : <></>
            }
        </SwipeActionView>
    )
}

export default SwipePanel;