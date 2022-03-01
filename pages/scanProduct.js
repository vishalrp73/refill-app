import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';


import RefillHeader from '../components/refillHeader/refillHeader';
import ScanditSimple from '../components/scanditSimple/scanditSimple';
import ScanditMatrix from '../components/scanditMatrix/scanditMatrix';
import { styles } from './styles/scanProduct';

const Stack = createStackNavigator();

const ScanProduct = ( { route, navigation} ) => {


    console.log(route.params);

    return (
        <SafeAreaProvider>

            <SafeAreaView>
                <RefillHeader showFlag = {false} />
            </SafeAreaView>

            <Stack.Navigator initialRouteName = "ScanditSimple">
                <Stack.Screen name = 'ScanditSimple' component = { ScanditSimple } options = {{headerShown: false}} />
                <Stack.Screen name = 'ScanditMatrix' component= { ScanditMatrix } options = {{headerShown: false}} />
            </Stack.Navigator>


        </SafeAreaProvider>
    )
}

export default ScanProduct;