import React from 'react';
import { styles } from './styles/status';

import { SafeAreaView, View, Text, ScrollView, Pressable } from 'react-native';

import PanelStatus from '../components/panelStatus/panelStatus';
import RefillHeader from '../components/refillHeader/refillHeader';

const Status = () => {

    
    return (
        <SafeAreaView style = {styles.statusContainer}>
            <RefillHeader showFlag = {true} />
            <View style = {styles.statusHeader}>
                <View style = {styles.prodTextContainer}>
                    <Text style = {styles.prodText}>Product</Text>
                </View>
                <View style = {styles.statTextContainer}>
                    <Text style = {styles.statText}>Status</Text>
                </View>
            </View>
            <ScrollView style = {styles.productContainer}>
                { /* Replace with .map of all products coming from DB and pass props */}
                <PanelStatus />
                <PanelStatus />
                <PanelStatus />
                <PanelStatus />
                <PanelStatus />
                <PanelStatus />
                <PanelStatus />
            </ScrollView>

            <View style = {styles.doneFooter}>
                <Pressable style = {styles.doneBtn}
                    onPress = {() => console.log('Done btn pressed, list to be sent back to db to drop rows')} >
                        <Text style = {styles.doneText} >Done</Text>
                </Pressable>
            </View>

    </SafeAreaView>
    )
}

export default Status;