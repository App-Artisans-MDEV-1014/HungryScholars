import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LaunchingScreen from './src/components/LaunchingScreen';
import LoginScreen from './src/components/LoginScreen';
import SignUpScreen from './src/components/SignUpScreen';
import Home from './src/components/Home';
import Item from './src/components/Item';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    {/* <Stack.Navigator initialRouteName="LaunchingScreen" screenOptions={{ headerShown: false }}> */}
    <Stack.Navigator initialRouteName="LaunchingScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LaunchingScreen" component={LaunchingScreen} />
      <Stack.Screen name="SignInSignUp" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Item" component={Item} />

      
      {/* Add other screens to the stack */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
