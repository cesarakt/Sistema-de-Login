import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/core';
import styles from './styles';

export default function Home() {
    const navigation = useNavigation();

    function sair(){
        navigation.dispatch(StackActions.popToTop());
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Bem vindo !!!</Text>
            <Text style={styles.texto}>Cesar</Text>
            <Button 
                title='Sair'
                onPress={sair}
            />
        </View>
    );
}