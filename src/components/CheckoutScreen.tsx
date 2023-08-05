import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import PaymentMethodSection from './PaymentMethodSection';

type RootStackParamList = {
  LaunchingScreen: undefined;
  SignInSignUp: undefined;
  SignUp: undefined;
  Checkout: undefined;
  // Add other screen names here as needed
};

type CheckoutScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Checkout'>;

interface Props {
  navigation: CheckoutScreenNavigationProp;
}

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const checkoutData: OrderItem[] = [
  { id: '1', name: 'Hamburger', price: 8.99, quantity: 1 },
  // Add more order items as needed
];

const studentDetails = {
  name: 'John Doe',
  contactNumber: '123-456-7890',
  // Add other student details as needed
};

const CheckoutScreen: React.FC<Props> = () => {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  const [orderData, setOrderData] = useState<OrderItem[]>(checkoutData);

  const renderItem = ({ item }: { item: OrderItem }) => (
    <View style={styles.orderItemContainer}>
      <Text style={styles.orderItem}>{item.name} ${item.price.toFixed(2)}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => handleQuantityChange(item.id, -1)}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => handleQuantityChange(item.id, 1)}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Calculate the total sum and the number of items selected
  const totalSum = useMemo(() => orderData.reduce((sum, item) => sum + item.price * item.quantity, 0), [
    orderData,
  ]);
  const itemCount = useMemo(() => orderData.reduce((count, item) => count + item.quantity, 0), [
    orderData,
  ]);

  // Function to handle quantity change
  const handleQuantityChange = (itemId: string, change: number) => {
    setOrderData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(item.quantity + change, 0) } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackButtonPress}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.checkoutText}>Checkout</Text>
      </View>

      {/* Order Summary */}
      <View style={styles.orderSummary}>
        <Text style={styles.heading}>Order Summary</Text>
        <FlatList
          data={orderData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.orderList}
        />
      </View>

      {/* Student Details */}
      <View style={styles.studentDetailsContainer}>
        <Text style={styles.studentDetailsHeading}>Student Details</Text>
      </View>
      <View style={styles.studentDetails}>
        <Image source={require('../../assets/images/logo.png')} style={styles.profilePicture} />
        <View style={styles.studentInfo}>
          <Text style={styles.studentName}>{studentDetails.name}</Text>
          <Text style={styles.contactNumber}>{studentDetails.contactNumber}</Text>
        </View>
      </View>

      {/* Payment Method Section */}
      <View style={styles.paymentSection}>
        <Text style={styles.paymentHeader}>Payment Method</Text>
        <View style={styles.paymentOptionsContainer}>
          <PaymentMethodSection />
        </View>
      </View>

      {/* Checkout Section (at the bottom) */}
      <View style={styles.checkoutSection}>
        <View style={styles.checkoutDetails}>
          <Text style={styles.itemCount}>Items Selected: {itemCount}</Text>
          <Text style={styles.totalSum}>Total: ${totalSum.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242428',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#888888', // Add grey background color
    padding: 10, // Add padding to the header
    borderRadius: 8, // Add rounded corners to the header
  },
  backButton: {
    color: '#FFDD95',
    fontSize: 18,
  },
  checkoutText: {
    color: '#FFDD95',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderSummary: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFDD95',
    marginBottom: 20,
  },
  orderList: {
    flexGrow: 1,
  },
  orderItemContainer: {
    backgroundColor: '#FFDD95',
    borderRadius: 8,
    marginBottom: 10,
  },
  orderItem: {
    color: '#242428',
    fontSize: 18,
    padding: 10,
  },
  studentDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    color: '#FFDD95',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactNumber: {
    color: '#FFDD95',
    fontSize: 14,
  },
  paymentSection: {
    marginBottom: 20,
  },
  paymentHeader: {
    color: '#FFDD95',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentOptionsContainer: {
    flexDirection: 'row',
  },
  paymentOption: {
    backgroundColor: '#888888',
    padding: 10,
    marginRight: 10,
    borderRadius: 8,
  },
  paymentOptionText: {
    color: '#FFDD95',
    fontSize: 16,
  },
  checkoutSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#666666', // Grey background color
    borderRadius: 8, // Rounded corners
    padding: 10, // Padding
    position: 'absolute',
    bottom: 20, // Align the checkout section to the bottom
    left: 20, // Add left padding to the checkout section
    right: 20, // Add right padding to the checkout section
  },
  checkoutDetails: {
    flex: 1,
  },
  itemCount: {
    color: '#FFDD95',
    fontSize: 16,
  },
  totalSum: {
    color: '#FFDD95',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#FFDD95', // Yellow background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8, // Rounded corners
  },
  checkoutButtonText: {
    color: '#242428',
    fontSize: 18,
    fontWeight: 'bold',
  },quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#888888',
    padding: 5,
    borderRadius: 4,
  },
  quantityButtonText: {
    color: '#FFDD95',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    color: '#FFDD95',
    fontSize: 16,
    marginHorizontal: 10,
  },
  studentDetailsHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFDD95',
    marginBottom: 10,
  },
  studentDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default CheckoutScreen;