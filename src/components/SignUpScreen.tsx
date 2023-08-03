import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  LaunchingScreen: undefined;
  SignInSignUp: undefined;
  SignUp: undefined;
  // Add other screen names here as needed
};

type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'SignUp'>;
type SignUpScreenNavigationProp = NavigationProp<RootStackParamList, 'SignUp'>;

interface Props {
  route: SignUpScreenRouteProp;
  navigation: SignUpScreenNavigationProp;
}

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement your sign-up logic here
    if (email && password) {
      alert(`Signed up with: ${email}`);
    }
  };

  const handleSignInPress = () => {
    navigation.goBack();
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
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignInPress}>
        <Text style={styles.signInText}>Already have an account? Sign In</Text>
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
  signInText: {
    color: '#FFDD95',
    marginTop: 20,
  },
});

export default SignUpScreen;
