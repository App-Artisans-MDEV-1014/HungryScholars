import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  LaunchingScreen: undefined;
  SignInSignUp: undefined;
  SignUp: undefined;
  OrderScreen: undefined;
  // Add other screen names here as needed
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignInSignUp'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Perform authentication logic here, such as validating user credentials
    const isAuthenticated = true; // Replace with actual authentication logic

    if (isAuthenticated) {
      navigation.navigate('OrderScreen'); // Navigate to OrderScreen if authentication is successful
    } else {
      // Handle unsuccessful authentication (e.g., show error message)
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
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
    height: 40,
    marginBottom: 10,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  signInButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#FFDD95',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  signInButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#242428',
  },
});

export default LoginScreen;
