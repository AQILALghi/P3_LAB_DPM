import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Gunakan ikon dari expo-vector-icons

const NavBarProfile = () => {
    return (
        <View style={styles.navBar}>
            {/* Garis tiga (hamburger menu) */}
            <TouchableOpacity style={styles.menuButton}>
                <MaterialIcons name="menu" size={24} color="#fff" />
            </TouchableOpacity>

            {/* My Profile */}
            <TouchableOpacity>
                <Text style={styles.navItem}>My Profile</Text>
            </TouchableOpacity>

            {/* Home */}
            <TouchableOpacity>
                <Text style={styles.navItem}>Home</Text>
            </TouchableOpacity>

            {/* Settings */}
            <TouchableOpacity>
                <Text style={styles.navItem}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        position: 'absolute',
        top: '8%', // Dipindahkan sedikit ke atas agar cocok dengan iPhone 15 Pro
        alignSelf: 'center', // Menu diposisikan horizontal di tengah
        width: '90%', // Lebar navigasi
        flexDirection: 'row',
        justifyContent: 'space-between', // Menu dipisahkan dengan jarak
        backgroundColor: '#6200EE', // Warna latar belakang
        padding: 15,
        borderRadius: 10, // Sudut melengkung
        zIndex: 10, // Agar muncul di atas elemen lain
    },
    menuButton: {
        marginRight: 10,
    },
    navItem: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff', // Warna teks putih
    },
});

export default NavBarProfile;
