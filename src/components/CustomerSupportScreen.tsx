import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#FFDD95" />
        </TouchableOpacity>
          
          <Text style={styles.reportText}>Report an Issue</Text>
        
      </View>
      <View style={styles.space} />
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
    backgroundColor: '#242428',
    padding: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:10,
  },
  reportText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFDD95',
  },
  space: {
    height: 20,
  },
  input: {
    width: '100%',
    height: 200, // Increase height to make the input field larger
    borderWidth: 1,
    borderColor: '#FFDD95',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginVertical: 10,
    color: '#FFDD95',
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#FFDD95',
    paddingVertical: 12, // Increase padding to make the button larger
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
