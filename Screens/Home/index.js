import React from 'react';
import { View, Text, Button } from 'react-native';

import firebase from '../../src/firebaseConnection';
import { useNavigation, StackActions } from '@react-navigation/core';
import styles from './styles';

export default function Home({ route }) {
    const navigation = useNavigation();
    const email = route.params?.email;

    async function sair() {
        await firebase.auth().signOut();
        navigation.dispatch(StackActions.popToTop());
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Bem vindo !!!</Text>
            <Text style={styles.texto}>{email}</Text>
            <Button
                title='Sair'
                onPress={sair}
            />
        </View>
    );
}