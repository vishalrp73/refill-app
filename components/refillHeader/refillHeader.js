import React from 'react';
import { styles } from './refillHeaderStyles';

import { View, Pressable, Image } from 'react-native';
import RefillMenu from '../refillMenu/refillMenu';
import { useNavigation } from '@react-navigation/native';

const RefillHeader = (props) => {

    const navigation = useNavigation();

    return (
        <View style = {styles.headerContainer}>
                <RefillMenu />
                {
                    props.showFlag ?                        
                        <Pressable onPress = {() => navigation.navigate('StockVariance')}
                                    style = {styles.flagIcon} >
                            <Image style = {styles.flagImg}
                                source = {require('../../assets/refillMenu/flagIcon.png')} />
                        </Pressable> : <></>
                }
            </View>
    )
}

export default RefillHeader;