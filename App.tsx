import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LaunchingScreen from './src/components/LaunchingScreen';
import LoginScreen from './src/components/LoginScreen';
import SignUpScreen from './src/components/SignUpScreen';
import Home from './src/components/Home';
import Item from './src/components/Item';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#FFDD95',
      tabBarInactiveTintColor: 'gray',
      tabBarIcon: ({ focused, color }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Item') {
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
    <Tab.Screen name="Item" component={Item} />
  </Tab.Navigator>
);

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="LaunchingScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LaunchingScreen" component={LaunchingScreen} />
      <Stack.Screen name="SignInSignUp" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
