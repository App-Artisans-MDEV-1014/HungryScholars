import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LaunchingScreen from './src/components/LaunchingScreen';

import FirstOnboardingScreen from './src/components/FirstOnboardingScreen';
import SecondOnboardingScreen from './src/components/SecondOnboardingScreen';
import ThirdOnboardingScreen from './src/components/ThirdOnboardingScreen';
import FourthOnboardingScreen from './src/components/FourthOnboardingScreen';

import LoginScreen from './src/components/LoginScreen';
import SignUpScreen from './src/components/SignUpScreen';

import Home from './src/components/Home';

import RestaurantMenuScreen from './src/components/RestaurantMenuScreen';

import Item from './src/components/Item';

import OrderScreen from './src/components/OrderScreen';

import CheckoutScreen from './src/components/CheckoutScreen';

import ProfileScreen from './src/components/ProfileScreen';

import CustomerSupportScreen from './src/components/CustomerSupportScreen';

import ChangePasswordScreen from './src/components/ChangePasswordScreen';






const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#FFDD95',
      tabBarInactiveTintColor: 'white',
      tabBarIcon: ({ focused, color }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'PreviousOrders') {
          iconName = focused ? 'list' : 'list-outline';
        } else if (route.name === 'Checkout') {
          iconName = focused ? 'cart' : 'cart-outline';
        } else if (route.name === 'ProfileScreen') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'OrderScreen') {
          iconName = focused ? 'list' : 'list-outline';
        } else {
          iconName = 'ellipse'; 
        }

        return <Ionicons name={iconName} size={25} color={color} />;
      },
      tabBarStyle: {
        backgroundColor: '#646465',
      },
      tabBarShowLabel: false,
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    
    <Tab.Screen name="Checkout" component={CheckoutScreen} />
    <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    <Tab.Screen name="PreviousOrders" component={OrderScreen} 
    
    
    />
  </Tab.Navigator>
);




const AppNavigator: React.FC = () => (

  <NavigationContainer>
    <Stack.Navigator initialRouteName="LaunchingScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LaunchingScreen" component={LaunchingScreen} />

      <Stack.Screen name="FirstOnboardingScreen" component={FirstOnboardingScreen} />
      <Stack.Screen name="SecondOnboardingScreen" component={SecondOnboardingScreen} />
      <Stack.Screen name="ThirdOnboardingScreen" component={ThirdOnboardingScreen} />
      <Stack.Screen name="FourthOnboardingScreen" component={FourthOnboardingScreen} />
      <Stack.Screen name="RestaurantMenuScreen" component={RestaurantMenuScreen} />

      <Stack.Screen name="Item" component={Item} />

      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />

      <Stack.Screen name="OrderScreen" component={OrderScreen} />

      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="Home" component={TabNavigator} />

      <Stack.Screen name="CustomerSupportScreen" component={CustomerSupportScreen} />

      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen}/>
      {/* Add other screens to the stack */}

      

    </Stack.Navigator>
  </NavigationContainer>

  // <RestaurantMenuScreen menuItems={menuItems}/>
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
