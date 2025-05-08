// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Éxito', 'Inicio de sesión correcto');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };


    return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1508780709619-79562169bc64' }} 
      style={styles.background}
      blurRadius={2}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido</Text>

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#ccc"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.registerButton]} 
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGoogle} onPress={handleGoogleLogin}>
          <Text style={styles.buttonText}>Ingresar con Google</Text>
        </TouchableOpacity>
        
      </View>
    </ImageBackground>
  );

}

const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      Alert.alert('Éxito', 'Inicio de sesión con Google');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    container: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      margin: 20,
      padding: 20,
      borderRadius: 12,
    },
    title: {
      fontSize: 28,
      color: '#fff',
      marginBottom: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    input: {
      backgroundColor: '#333',
      color: '#fff',
      padding: 12,
      borderRadius: 8,
      marginBottom: 12,
    },
    buttonGoogle: {
        backgroundColor: '#E4E4E7',
        padding: 12,
        borderRadius: 8,
        marginTop: 10,
        color: '#000'
    },
    button: {
      backgroundColor: '#1e90ff',
      padding: 12,
      borderRadius: 8,
      marginTop: 10,
    },
    registerButton: {
      backgroundColor: '#32cd32',
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: '600',
    },
  });