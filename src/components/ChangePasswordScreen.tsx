import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ChangePasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = () => {
    // Check if the new password and confirm new password match
    if (newPassword !== confirmNewPassword) {
      Alert.alert('Error', 'New password and confirm new password do not match.');
      return;
    }

    // Perform the password change logic here (e.g., make an API call to update the password)
    // For demonstration purposes, we'll just show an alert
    Alert.alert('Success', 'Password changed successfully.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Change Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Current Password"
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        secureTextEntry
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
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
    marginBottom: 20,
    color: '#FFDD95',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#FFDD95',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#FFDD95',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFDD95',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChangePasswordScreen;
