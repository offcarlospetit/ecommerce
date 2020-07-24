import React, { useContext } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from '../types/AppParamList';
import Antdesing from "react-native-vector-icons/AntDesign";
import { HomeStack } from './HomeStack';
import FontAwesome from "react-native-vector-icons/FontAwesome";


interface AppTabProps {

}

const Tabs = createBottomTabNavigator<AppParamList>()

export const AppTab: React.FC<AppTabProps> = ({ }) => {



    return (
        <Tabs.Navigator initialRouteName="Home"
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home'
                        return <FontAwesome name={iconName} size={size} color={color} />;

                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'user' : 'user';
                        return <Antdesing name={iconName} size={size} color={color} />;
                    } else if (route.name === 'Search') {
                        iconName = "search1";
                        return <Antdesing name={iconName} size={size} color={color} />;
                    }
                    // You can return any component that you like here!
                },
            })}

            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
                keyboardHidesTabBar: true,
                style: { backgroundColor: '#f9f9f9' }
            }}
        >
            <Tabs.Screen name='Home' component={HomeStack} />
            <Tabs.Screen name='Search' component={HomeStack} />
            <Tabs.Screen name='Profile' component={HomeStack} />
        </Tabs.Navigator>
    );
}