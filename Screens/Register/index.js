import React, { useState } from 'react';
import { View, Text, TextInput, Button, Keyboard } from 'react-native';

import firebase from '../../src/firebaseConnection';
import { useNavigation, StackActions } from '@react-navigation/core';

import styles from './styles';

export default function Register() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();
    const getEmail = texto => setEmail(texto);
    const getSenha = texto => setSenha(texto);

    async function cadastrar() {
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((value) => {
                alert(`Usuario ${value.user.email} criado com sucesso!`);
                navigation.navigate('Login');
            })
            .catch((error) => {
                if (error.code === 'auth/weak-password') {
                    alert('Sua senha deve ter pelo menos 6 caractéres');
                    return;
                }
                if (error.code === 'auth/invalid-email') {
                    alert('Email inválido')
                    return;
                } else {
                    alert('Ops, algo deu errado!');
                    return;
                }
            })
        setEmail('');
        setSenha('');
    }

    function irLogin() { navigation.navigate('Login') }

    return (
        <View style={styles.container}>
            <View style={styles.inputArea}>
                <Text style={styles.titulo}>Cadastro</Text>
                <Text style={styles.texto}>Email</Text>
                <TextInput
                    placeholder='Insira um e-mail válido'
                    style={styles.input}
                    value={email}
                    onChangeText={getEmail}
                />
                <Text style={styles.texto}>Senha</Text>
                <TextInput
                    placeholder='Crie uma senha'
                    style={styles.input}
                    value={senha}
                    onChangeText={getSenha}
                />
                <View style={styles.btn}>
                    <Button
                        title='Enviar'
                        onPress={cadastrar}
                    />
                </View>
                <View>
                    <Button
                        title='Acessar'
                        onPress={irLogin}
                    />
                </View>
            </View>

        </View>
    )
};