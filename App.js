import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/home';
import Dashboard from './components/dashboard';
import Refill from './components/refill';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';



const Stack = createStackNavigator();

const App = () => {


  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name = 'Home' component = { Home } options = {{title: "Home Page"}} />
          <Stack.Screen name = 'Dashboard' component = { Dashboard} options = {{title: "Dashboard"}} />
          <Stack.Screen name = 'Refill' component = { Refill } options = {{title: "Refill"}} />
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    
  )
}

export default App;