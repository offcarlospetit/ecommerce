import React, { useContext } from 'react'
import { Text, TouchableOpacity, FlatList, Button, View, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/MaterialIcons";
import { HomeParamList, HomeNavProps } from '../types/HomeParamList';
import Home from '../screens/Home/Home';
import { DetailStack } from './DetailStack';



interface HomeProps {

}

const Stack = createStackNavigator<HomeParamList>()



export const HomeNavigator: React.FC<HomeProps> = ({ }) => {
    return (
        <Stack.Navigator initialRouteName='Home' headerMode='screen'>
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    );
}