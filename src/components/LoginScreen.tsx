import React from 'react';
import { useState, useEffect, FC } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login button press
  const handleLogin = () => {
    // Implement your login logic here
    // For demonstration purposes, let's just display the user's email on successful login
    if (email && password) {
      alert(`Logged in as: ${email}`);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#FFDD95"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#FFDD95"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      {/* Add a "Forgot Password" link or any other necessary elements */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242428',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#FFDD95',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginVertical: 10,
    color: '#FFDD95',
  },
  button: {
    backgroundColor: '#FFDD95',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#242428',
    textAlign: 'center',
  },
});

export default LoginScreen;
