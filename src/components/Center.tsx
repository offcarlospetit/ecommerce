import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native';

interface CenterProps {

}

export const Center: React.FC<CenterProps> = ({ children }) => {
    return (
        <SafeAreaView style={styles.center}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
})