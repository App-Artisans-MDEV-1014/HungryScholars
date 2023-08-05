import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  LaunchingScreen: undefined;
  SignInSignUp: undefined;
  SignUpScreen: undefined;
  Home: undefined;


  FirstOnboardingScreen: undefined;
  SecondOnboardingScreen: undefined;
  ThirdOnboardingScreen: undefined;
  FourthOnboardingScreen: undefined;

  // Add other screen names here as needed
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignInSignUp'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    navigation.navigate('Home');

    if (email && password) {
      
      alert(`Logged in as: ${email}`);
    }
  };

  const handleSignUpPress = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log In</Text>

      {/* Add your logo image here */}
      <Image source={require('../../assets/APP_logo_lg.png')} style={styles.logo} resizeMode="contain" />

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
      <TouchableOpacity onPress={handleSignUpPress}>
        <Text style={styles.createAccountText}>Don't have an account? Create One</Text>
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFDD95',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
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
  createAccountText: {
    color: '#FFDD95',
    marginTop: 20,
  },
});

export default LoginScreen;
