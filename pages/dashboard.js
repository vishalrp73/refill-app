import React, { useState } from 'react';
import { styles } from './styles/dashboard';

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Pressable, View, Text, Image } from 'react-native';

const Dashboard = () => {
    
    const navigation = useNavigation();

    // Perform fetch of user details here or on login page -> pass props

    const user = {
        firstName: 'Sophia',
        lastName: 'Peterson',
        role: 'Refill Staff',
        id: 1,
        imageUrl: 'currently undefined'
    }

    const handleRoute = (num) => {
        if (num === 1) {
            navigation.navigate('Refill')
        } else if (num === 2) {
            console.log('Alert route not currently defined')
        } else if (num === 3) {
            console.log('Text route not currently defined')
        } else if (num === 4) {
            console.log('Check List route not currently defined')
        }
    }

    return (
        <SafeAreaView style = {styles.container}>

            <View style = {styles.userContainer} >
                { /* Replace with Avatar from react-native-elements */}
                <Image 
                    source = {require('../assets/dashboard/placeholder-profile.png')}
                    style = {styles.userImg} />
                { /* ------------------------- */}
                <Text style = {styles.userNameText} >{user.firstName} {user.lastName}</Text>
                <Text style = {styles.userRole} >{user.role}</Text>
            </View>


            <Text style = {styles.header}>Good morning, {user.firstName}</Text>

            <View style = {styles.btnGrid} >
                <Pressable 
                    onPress = {() => handleRoute(1)}
                    style = {styles.btn}
                    /* style = {({pressed}) => [
                        { backgroundColor: pressed ? '#0ABBBB' : 'white'}
                    ]} */>
                    <Image
                        style = {styles.btnIcons}
                        source = {require('../assets/dashboard/three-strikes.png')} />
                    <Text style = {styles.btnText}>REFILL LIST</Text>
                </Pressable>
                <Pressable
                    disabled
                    onPress = {() => handleRoute(2)}
                    style = {styles.btn}>
                        <Image
                            style = {styles.btnIcons}
                            source = {require('../assets/dashboard/alert.png')} />
                        <Text style = {styles.btnText}>ALERT</Text>
                </Pressable>
                <Pressable
                    disabled
                    onPress = {() => handleRoute(3)}
                    style = {styles.btn}>
                        <Image
                            style = {styles.btnIcons}
                            source = {require('../assets/dashboard/message.png')} />
                        <Text style = {styles.btnText}>TEXT</Text>
                </Pressable>
                <Pressable
                    disabled
                    onPress = {() => handleRoute(4)}
                    style = {styles.btn}>
                        <Image
                            style = {styles.btnIcons}
                            source = {require('../assets/dashboard/clover.png')} />
                        <Text style = {styles.btnText}>CHECK LIST</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Dashboard;