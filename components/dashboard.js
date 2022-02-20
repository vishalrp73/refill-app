import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {

    const navigation = useNavigation();

    const routeChange = (num) => {
        if (num === 1) {
            navigation.navigate('Home');
        } else if (num === 2) {
            navigation.navigate('Refill');
        }
    }


    return (
        <SafeAreaView>
            <Text>Dashboard page</Text>
            <Button onPress={()=>routeChange(1)} title = 'Home' />
            <Button onPress = {() => routeChange(2)} title = 'Refill' />
        </SafeAreaView>
    )
}

export default Dashboard;