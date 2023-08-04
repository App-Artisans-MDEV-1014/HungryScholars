import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';

interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
}

interface Props {
  // Pass the restaurant menu items as a prop to this component
  menuItems: MenuItem[];
}

const RestaurantMenuScreen: React.FC<Props> = ({ menuItems }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    // You can implement the search functionality here to filter the menu items based on the search query
  };

  const renderItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={require('../../assets/images/img-dummyitem.png')} style={styles.itemImage} resizeMode="contain" />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
  

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#242428',
      paddingHorizontal: 16, // Add left and right padding
    },
    searchBar: {
      padding: 10,
      fontSize: 18,
      backgroundColor: '#646465',
      borderRadius: 20, // Add border radius for rounded corners
      marginBottom: 10,
      marginLeft: 10, // Add left margin
      marginRight: 10, // Add right margin
    },
    listContainer: {
      padding: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
      },

      itemImage: {
        flex: 0.5, // Add flex to make the image expand to fill the container
        marginRight: 10,
        marginLeft: 2,
        height:80,
        width:80
      },
      
      itemDetails: {
        flex: 1, // Add flex to make the details container expand to fill the space
        marginRight: 10,

      },
      itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 4, // Add padding between the name and description
        color: '#FFFFFF'

      },
      itemDescription: {
        fontSize: 16,
        color: '#BCBCBC',
        paddingBottom: 4, // Add padding between the description and pricing
      },
      itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
      },
});

export default RestaurantMenuScreen;
