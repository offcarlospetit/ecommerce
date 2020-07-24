import React from 'react'
import { Provider } from 'react-redux';
import store from "../store/Store";


interface ReduxProviderProps {

}

export const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}