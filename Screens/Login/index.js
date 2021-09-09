import React, { useState } from 'react';
import { View, Text, TextInput, Button, Keyboard } from 'react-native';

import firebase from '../../src/firebaseConnection';
import { useNavigation } from '@react-navigation/core';

import styles from './styles';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();
    const getEmail = texto => setEmail(texto);
    const getSenha = texto => setSenha(texto);

    async function acessar() {
        await firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((value) => {
                navigation.navigate('Home', { email: email });
            })
            .catch((error) => {
                alert('Senha ou email inválidos');
                console.log(error);
            })

        setEmail('')
        setSenha('')
        Keyboard.dismiss();
    }

    function irCadastro() { navigation.navigate('Register'); }

    return (
        <View style={styles.container}>
            <View style={styles.areaInput}>
                <Text style={styles.titulo}>Login</Text>
                <Text style={styles.texto}>Email</Text>
                <TextInput
                    placeholder='Insira seu e-mail'
                    style={styles.input}
                    value={email}
                    onChangeText={getEmail}
                />
                <Text style={styles.texto}>Senha</Text>
                <TextInput
                    placeholder='Insira sua senha'
                    style={styles.input}
                    value={senha}
                    onChangeText={getSenha}
                    secureTextEntry={true}
                />
                <View style={styles.btn}>
                    <Button
                        title='Entrar'
                        onPress={acessar}
                    />
                </View>
                <View>
                    <Button
                        title='Cadastrar'
                        onPress={irCadastro}
                    />
                </View>

            </View>
        </View>
    )
};