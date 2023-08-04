import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LaunchingScreen from './src/components/LaunchingScreen';
import LoginScreen from './src/components/LoginScreen';
import SignUpScreen from './src/components/SignUpScreen';
import FirstOnboardingScreen from './src/components/FirstOnboardingScreen';
import SecondOnboardingScreen from './src/components/SecondOnboardingScreen';
import ThirdOnboardingScreen from './src/components/ThirdOnboardingScreen';
import FourthOnboardingScreen from './src/components/FourthOnboardingScreen';
import RestaurantMenuScreen from './src/components/RestaurantMenuScreen';

const Stack = createStackNavigator();

const menuItems = [
  {
    id: '1',
    name: 'Burger',
    price: '$8.99',
    description: 'A delicious beef burger with cheese, lettuce, and tomato.',
  },
  {
    id: '2',
    name: 'Pizza',
    price: '$12.50',
    description: 'A classic Margherita pizza with fresh mozzarella and basil.',
  },
  // Add more menu items as needed
];

const AppNavigator: React.FC = () => (
  <RestaurantMenuScreen menuItems={menuItems}/>
  // <NavigationContainer>
  //   <Stack.Navigator initialRouteName="FirstOnboardingScreen" screenOptions={{ headerShown: false }}>
  //     <Stack.Screen name="FirstOnboardingScreen" component={FirstOnboardingScreen} />
  //     <Stack.Screen name="SecondOnboardingScreen" component={SecondOnboardingScreen} />
  //     <Stack.Screen name="ThirdOnboardingScreen" component={ThirdOnboardingScreen} />
  //     <Stack.Screen name="FourthOnboardingScreen" component={FourthOnboardingScreen} />
  //     <Stack.Screen name="LoginScreen" component={LoginScreen} />
  //     <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
  //   </Stack.Navigator>
  // </NavigationContainer>
  // <NavigationContainer>
  //   <Stack.Navigator initialRouteName="LaunchingScreen" screenOptions={{ headerShown: false }}>
  //     <Stack.Screen name="LaunchingScreen" component={LaunchingScreen} />
  //     <Stack.Screen name="SignInSignUp" component={LoginScreen} />
  //     <Stack.Screen name="SignUp" component={SignUpScreen} />
  //     {/* Add other screens to the stack */}
  //   </Stack.Navigator>
  // </NavigationContainer>
);

export default AppNavigator;
