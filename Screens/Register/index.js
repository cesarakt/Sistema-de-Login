import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import styles from './styles';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    const getEmail = texto => setEmail(texto);
    const getSenha = texto => setSenha(texto);

    function cadastrar() {

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
                    placeholder='crie uma senha'
                    style={styles.input}
                    value={senha}
                    onChangeText={getSenha}
                />
                <View style={styles.btn}>
                    <Button
                        title='Cadastrar'
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