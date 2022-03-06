import React, { useState, useEffect } from 'react';
import { styles } from  './styles/urgent';
import { SafeAreaView, View, ScrollView, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import RefillMenu from '../components/refillMenu/refillMenu';
import ProductPanel from '../components/productPanel/productPanel';
import RefillHeader from '../components/refillHeader/refillHeader';
import SwipePanel from '../components/swipePanel/swipePanel';

const Urgent = (props) => {

    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        setEmployeeList(props.list)
    }, [props.list]);


    // Replace with method that sums all items from fetch
    const numList = 10;

    const navigation = useNavigation();

    return (
        <SafeAreaView style = {styles.container}>
            <RefillHeader showFlag = {true} />

            <Text style = {styles.completeText}>You have {numList} lists to complete today</Text>

            <ScrollView style = {styles.productContainer}>
                { /* Replace with .map of all products coming from DB and pass props */}
                {
                    employeeList.map(item => (
                        <SwipePanel details = {item} />
                    ))
                }
            </ScrollView>

                <Pressable style = {styles.doneBtn}
                    onPress = {() => navigation.navigate('Status')} >
                        <Text style = {styles.doneText} >Done</Text>
                </Pressable>
        </SafeAreaView>
    )
}

export default Urgent;