import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LaunchingScreen: React.FC = ({ navigation }) => {
  useEffect(() => {
    // Simulate some loading time for demonstration purposes
    const fakeLoadingTime = 2000; // 2 seconds
    const timer = setTimeout(() => {
      // Navigate to the desired screen after loading
      // Make sure to replace 'SignInSignUp' with the actual screen name
      navigation.replace('SignInSignUp');
    }, fakeLoadingTime);

    return () => clearTimeout(timer);
  }, []); // Empty array means the effect runs only once on component mount

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
