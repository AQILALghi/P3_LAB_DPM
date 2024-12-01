import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import HeaderProfile from '../../components/headerProfile';
import NavBarProfile from '../../components/navBarProfile';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulasi API Call
        const fetchData = async () => {
            setLoading(true);
            setTimeout(() => {
                setUserData({
                    name: 'AQIL ALGHIFARI',
                    email: 'aqilalghifari123@gmail.com',
                });
                setLoading(false);
            }, 2000); // Simulasi delay 2 detik
        };

        fetchData();
    }, []); // [] memastikan hanya dipanggil sekali saat komponen dimuat

    return (
        <View style={styles.container}>
            <HeaderProfile />
            {loading ? (
                <ActivityIndicator size="large" color="#6200EE" />
            ) : (
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{userData.name}</Text>
                    <Text style={styles.email}>{userData.email}</Text>
                </View>
            )}
            <NavBarProfile />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    profileInfo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
        color: '#666',
    },
});

export default ProfilePage;
