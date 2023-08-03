import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  LaunchingScreen: undefined;
  LoginScreen: undefined;
  SignUp: undefined;
  // Add other screen names here as needed
};

type LaunchingScreenRouteProp = RouteProp<RootStackParamList, 'LaunchingScreen'>;
type LaunchingScreenNavigationProp = NavigationProp<RootStackParamList, 'LaunchingScreen'>;

interface Props {
  route: LaunchingScreenRouteProp;
  navigation: LaunchingScreenNavigationProp;
}

const LaunchingScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const fakeLoadingTime = 2000; // 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('LoginScreen');
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
