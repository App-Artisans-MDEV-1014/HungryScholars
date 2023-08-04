import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LaunchingScreen from './src/components/LaunchingScreen';
import LoginScreen from './src/components/LoginScreen';
import SignUpScreen from './src/components/SignUpScreen';
import OrderScreen from './src/components/OrderScreen';

const Stack = createStackNavigator();

// Define the RootStackParamList
type RootStackParamList = {
  LaunchingScreen: undefined;
  SignInSignUp: undefined;
  SignUp: undefined;
  OrderScreen: undefined;
  // Add other screen names here as needed
};

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="LaunchingScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LaunchingScreen" component={LaunchingScreen} />
      <Stack.Screen name="SignInSignUp" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      {/* Add other screens to the stack */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
