import React, { useContext } from 'react'
import { Text, TouchableOpacity, FlatList, Button, View, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/MaterialIcons";
import { HomeParamList, HomeNavProps } from '../types/HomeParamList';
import Home from '../screens/Home/Home';
import { HomeNavigator } from './Home';
import { DetailStack } from './DetailStack';



interface HomeStackProps {

}

const Stack = createStackNavigator<HomeParamList>()
const Stack2 = createStackNavigator<HomeParamList>()



export const HomeStack: React.FC<HomeStackProps> = ({ }) => {
    return (
        <Stack.Navigator initialRouteName='Home' headerMode='none'>
            <Stack.Screen name='Home' component={HomeNavigator} />
            <Stack.Screen name="Detail" component={DetailStack} />
        </Stack.Navigator>
    );
}