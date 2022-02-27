import React, { useState } from 'react';
import { styles } from './panelStatusStyles';

import { View, Text, Image, Switch } from 'react-native';

const PanelStatus = () => {

    // Set default to props amount from DB when built
    const [aisleNum, setAisleNum] = useState(1);
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


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

        <View style = {styles.switchContainer}>
            <Switch
                trackColor={{ false: "#767577", true: "#0ABBBB" }}
                thumbColor="#C4C4C4"
                ios_backgroundColor="#fff"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>

        </View>
    )
}

export default PanelStatus;