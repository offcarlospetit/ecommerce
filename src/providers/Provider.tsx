import React from 'react'
import { Routes } from '../navigatiors/Routes';
import { ReduxProvider } from "./ReduxProvider";

interface ProviderProps {

}

export const Provider: React.FC<ProviderProps> = ({ }) => {
    return (
        <ReduxProvider>
            <Routes />
        </ReduxProvider>
    );
}