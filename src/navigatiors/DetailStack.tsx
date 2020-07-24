import React, { useContext } from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Antdesing from "react-native-vector-icons/AntDesign";
import { DetailParamList } from '../types/DetailParamList';
import { Button, View, Text, Platform } from 'react-native';
import Detail from '../screens/Detail/Detail';
import Cart from '../screens/Cart/Cart';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Size } from '../services/Services';

interface DetailStackProps {

}

const Stack = createStackNavigator<DetailParamList>()

export const DetailStack: React.FC<DetailStackProps> = ({ navigation, route }) => {
    const platform = Platform.OS
    const mode = platform === "ios" ? "modal" : "card"
    const scOptions = platform === "ios" ? {
        ...TransitionPresets.ModalPresentationIOS,
        gestureEnabled: true,
        cardOverlayEnabled: true,
    } : {}



    return (
        <Stack.Navigator mode={mode} screenOptions={scOptions}>
            <Stack.Screen name={"Detail"} component={Detail} options={(navigation) => ({
                headerStyle: {
                    backgroundColor: "white",
                },
                headerTitleStyle: {
                    textAlign: 'center',
                    flexGrow: 1,
                    marginRight: 50,
                    alignSelf: 'center',
                    color: "white",
                    fontSize: Size(65),
                },
                headerStatusBarHeight: Platform.OS == 'ios' ? Size(150) : Size(35)
            })
            } />

            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    );
}