import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';


import { Text } from 'react-native';
import { styles } from './styles/refill';

import Urgent from './urgent';
import Standard from './standard';

const Stack = createStackNavigator();

const Refill = () => {


    return (
        <SafeAreaProvider>

            <Stack.Navigator initialRouteName = "Urgent">
                <Stack.Screen name = 'Urgent' component = { Urgent } options = {{headerShown: false}} />
                <Stack.Screen name = 'Standard' component = { Standard } options = {{headerShown: false}} />
            </Stack.Navigator>

        </SafeAreaProvider>
    )

}

export default Refill;