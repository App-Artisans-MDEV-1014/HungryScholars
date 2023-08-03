import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LaunchingScreen from './src/components/LaunchingScreen';
import LoginScreen from './src/components/LoginScreen';
import SignUpScreen from './src/components/SignUpScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="LaunchingScreen" headerMode="none">
      <Stack.Screen name="LaunchingScreen" component={LaunchingScreen} />
      <Stack.Screen name="SignInSignUp" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      {/* Add other screens to the stack */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
