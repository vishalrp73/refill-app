import React, { useState } from 'react';
import { styles } from './productPanelStyles';
import { View, Text, Image, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const ProductPanel = (props) => {

    // Set default to props amount from DB when built
    const [aisleNum, setAisleNum] = useState(1)
    const [refNum, setRefNum] = useState(0);
    const [refillDenom, setRefillDenom] = useState(100);

    return (
        <View style = {styles.panelContainer}>

            <View style = {styles.prodImgContainer}>
                <Image style = {styles.prodImg}
                    source = {require('../../assets/refillMenu/coke.png')} />
            </View>

            <View style = {styles.prodInfoContainer}>
                <Text style = {styles.prodAisle}>Aisle {aisleNum}</Text>
                <View style = {styles.barcodeContainer}>
                    <Image style = {styles.barcodeImg}
                        source = {require('../../assets/refillMenu/barcode.png')} />
                </View>
            </View>

            <View style = {styles.refillContainer}>
                <TextInput
                        onChangeText={(e) => setRefNum(e)}
                        keyboardType = 'number-pad'
                        placeholder = {`${refNum}`}
                        style = { styles.refillNumBox }
                        returnKeyType='done' />
                <View style = {styles.refillDenomBox} >
                    <Text style = {styles.refillDenomText} >/{refillDenom}</Text>
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

        </View>
    )
}

export default ProductPanel;