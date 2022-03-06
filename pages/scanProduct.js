import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';


import RefillHeader from '../components/refillHeader/refillHeader';
import ScanditSimple from '../components/scanditSimple/scanditSimple';
import ScanditSimpleTest from '../components/scanditSimple/scanditSimpleTest';
import ScanditMatrix from '../components/scanditMatrix/scanditMatrix';
import { styles } from './styles/scanProduct';

const Stack = createStackNavigator();

const ScanProduct = ( { route, navigation} ) => {

    return (
        <SafeAreaProvider>

            <SafeAreaView>
                <RefillHeader showFlag = {false} />
            </SafeAreaView>

            <Stack.Navigator initialRouteName = "ScanditSimple">
                <Stack.Screen name = 'ScanditSimple' options = {{headerShown: false}} >
                    { (props) => <ScanditSimple {...props} details = {route.params} /> }
                </Stack.Screen>
                <Stack.Screen name = 'ScanditTest' component = { ScanditSimpleTest } options = {{headerShown: false}} />
                <Stack.Screen name = 'ScanditMatrix' component= { ScanditMatrix } options = {{headerShown: false}} />
            </Stack.Navigator>


        </SafeAreaProvider>
    )
}

export default ScanProduct;