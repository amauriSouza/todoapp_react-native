import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => (
    <View style={style.container}>
        <Text style={style.title}>TodoApp</Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        backgroundColor: '#39bcd3',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#bababa',
    },
    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default Header;