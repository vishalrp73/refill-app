import React, { useState, useEffect } from 'react';
import {
    Pressable,
    SafeAreaView,
    TextInput,
    Text,
    View,
    Image
} from 'react-native';
import { styles } from './styles/login';
import { useNavigation } from '@react-navigation/native';


const Login = () => {

    const [staffId, setStaffId] = useState();
    const [password, setPassword] = useState();

    const navigation = useNavigation();

    const handleLogin = () => {
        if (staffId && password) {
            navigation.push('Dashboard')
        } else {
            console.log('Please enter required fields')
        }
    }
    
    return (
        <SafeAreaView style = { styles.container } >

            <View style = {styles.refillIcon}>
                <Image 
                    style = {styles.crown}
                    source = {require('../assets/login/crown.png')} />
            </View>

            <Text style = {styles.loginHeader}>
                Refill &amp; Tracking
            </Text>

            <Pressable 
                onPress = {() => console.log('scan staff ID btn pressed')}
                style = { styles.scanId } >
                <Image 
                    style = {styles.camera}
                    source = {require('../assets/login/camera.png')} />
                <Text
                    style = {styles.scanText}>Tap to scan your staff ID</Text>
            </Pressable>

            <View style = {styles.loginInputContainer}>
                
                <Text style = {styles.loginText}>
                    Login
                </Text>
                
                <TextInput
                    onChangeText={(e) => setStaffId(e)}
                    keyboardType = 'number-pad'
                    style = { styles.loginInput }
                    placeholder = 'Staff ID'
                    returnKeyType='done' />

                <TextInput
                    onChangeText = {(e) => setPassword(e)}
                    style = { styles.loginInput }
                    secureTextEntry = {true}
                    placeholder = 'Password'
                    returnKeyType='done' />

                <TextInput
                    style = { styles.loginInput }
                    placeholder = 'Verification Code'
                    keyboardType = 'number-pad'
                    returnKeyType='done' />

                    {
                        staffId && password ?
                        <>
                            <Pressable
                                style = {styles.loginBtn}
                                onPress = {() => handleLogin()} >
                                    <Text style = {styles.loginBtnText} >Login</Text>
                            </Pressable>
                        </> : <></>
                    }

            </View>


        </SafeAreaView>    
    )
}

export default Login;