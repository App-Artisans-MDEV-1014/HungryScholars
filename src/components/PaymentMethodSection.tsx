import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface PaymentMethodProps {
  // Add any props needed for payment method data
}

const PaymentMethodSection: React.FC<PaymentMethodProps> = (props) => {
  const paymentMethods = [
    { id: '1', name: 'Card', icon: require('../../assets/images/logo.png') },
    { id: '2', name: 'Credit', icon: require('../../assets/images/logo.png') },
    // Add more payment methods as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.paymentHeader}>Choose a payment method</Text>
      <View style={styles.paymentOptionsContainer}>
        {paymentMethods.map((method) => (
          <TouchableOpacity key={method.id} style={styles.paymentOption}>
            <Image source={method.icon} style={styles.paymentMethodIcon} />
            <Text style={styles.paymentMethodName}>{method.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  paymentHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  paymentOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#666666',
    borderRadius: 8,
    padding: 10,
    flexWrap: 'wrap', // Add flexWrap to wrap items to the next line
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10, // Add marginBottom to separate payment methods on different lines
    flex: 1,
    maxWidth: '48%', // Limit each payment method to occupy maximum 48% of the container width
  },
  paymentMethodIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  paymentMethodName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default PaymentMethodSection;
