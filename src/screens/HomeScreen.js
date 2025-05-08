import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function HomeScreen() {
  const user = auth().currentUser;

  const handleLogout = () => {
    auth().signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido, {user?.email || user?.displayName}!</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
});
