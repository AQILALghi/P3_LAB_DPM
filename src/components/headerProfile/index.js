import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderProfile = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Profile Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#6200EE',
        padding: 20,
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default HeaderProfile;
