import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  LaunchingScreen: undefined;
  SignInSignUp: undefined;
  SignUp: undefined;
  OrderScreen: undefined;
  // Add other screen names here as needed
};

type LaunchingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LaunchingScreen'>;

interface Props {
  navigation: LaunchingScreenNavigationProp;
}

const LaunchingScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    // Simulate loading time for demonstration purposes
    const fakeLoadingTime = 2000; // 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('OrderScreen'); // Replace LaunchingScreen with OrderScreen
    }, fakeLoadingTime);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>HungryScholars</Text>
      {/* Add any loading animation or branding elements */}
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
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFDD95',
  },
});

export default LaunchingScreen;
