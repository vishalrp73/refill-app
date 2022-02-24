import React from 'react';
import { styles } from './refillMenuStyles';
import { useNavigation } from '@react-navigation/native';
import { View, Pressable, Text } from 'react-native';

const RefillMenu = () => {

    const navigation = useNavigation();

    return (
        <View style = { styles.menuContainer } >
            <Pressable style = {styles.urgentBtn} 
                onPress ={() => navigation.navigate('Urgent')}>
                <Text style = {styles.menuText}>URGENT</Text>
            </Pressable>
            <Pressable style = {styles.standardBtn}
                onPress = {() => navigation.navigate('Standard')} >
                <Text style = {styles.menuText}>STANDARD</Text>
            </Pressable>
        </View>
    )


}

export default RefillMenu;