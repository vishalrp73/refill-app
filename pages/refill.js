import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';


import { Text } from 'react-native';
import { styles } from './styles/refill';

import Urgent from './urgent';
import Standard from './standard';
import StockVar from './stockVar';
import Status from './status';
import ScanProduct from './scanProduct';

import BottomNav from '../components/bottomNav/bottomNav';

const Stack = createStackNavigator();

const Refill = () => {


    return (
        <SafeAreaProvider>

            <Stack.Navigator initialRouteName = "Urgent">
                <Stack.Screen name = 'Urgent' component = { Urgent } options = {{headerShown: false}} />
                <Stack.Screen name = 'Standard' component = { Standard } options = {{headerShown: false}} />
                <Stack.Screen name = 'StockVariance' component = { StockVar } options = {{headerShown: false}} />
                <Stack.Screen name = 'Status' component = { Status } options = {{headerShown: false}} />
                <Stack.Screen name = 'ScanProduct' component = { ScanProduct } options = {{headerShown: false}} />
            </Stack.Navigator>

            <BottomNav />

        </SafeAreaProvider>
    )

}

export default Refill;