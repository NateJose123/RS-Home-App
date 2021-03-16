import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { Chat, Home, Maintenance, Meals } from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Maintenance" component={Maintenance}/>
            <Tab.Screen name="Chat" component={Chat}/>
            <Tab.Screen name="Meals" component={Meals}/>
        </Tab.Navigator>
    )
}
 

export default BottomTabNav



