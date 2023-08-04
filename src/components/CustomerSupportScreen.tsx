import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  LaunchingScreen: undefined;
  SignInSignUp: undefined;
  SignUp: undefined;
  CustomerSupport: undefined;
  // Add other screen names here as needed
};

type CustomerSupportScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CustomerSupport'>;

interface Props {
  navigation: CustomerSupportScreenNavigationProp;
}

const CustomerSupportScreen: React.FC<Props> = ({ navigation }) => {
  const [report, setReport] = useState('');

  const handleReportSubmit = () => {
    // Implement logic to send the report to the customer support system
    if (report.trim() !== '') {
      alert('Report submitted successfully!');
      setReport('');
    } else {
      alert('Please enter your report before submitting.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Customer Support</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your report here"
        placeholderTextColor="#FFDD95"
        multiline
        onChangeText={setReport}
        value={report}
      />
      <TouchableOpacity style={styles.button} onPress={handleReportSubmit}>
        <Text style={styles.buttonText}>Submit Report</Text>
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
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFDD95',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: '#FFDD95',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginVertical: 10,
    color: '#FFDD95',
    textAlignVertical: 'top', // To start typing from the top of the input
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
});

export default CustomerSupportScreen;
