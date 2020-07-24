import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from 'react-native';

import { AppTab } from './AppTab';

interface RoutesProps {

}


export const Routes: React.FC<RoutesProps> = ({ }) => {


    return (
        <NavigationContainer>
            <AppTab />
        </NavigationContainer>
    );
}