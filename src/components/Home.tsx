import React, { FC, useEffect, useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, Image, ImageBackground, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import restaurantData from '../data/restaurants.json';
import StarRating from './StarRating'; // Assuming the StarRating component is in a separate file.

interface IRestaurant {
  id: string;
  title: string;
  image: string;
  rating: number;
  minCharge: number;
  items: Array<{
    "item name": string;
    "item rate": number;
    Nutritional: {
      calories: number;
      carbs: number;
      protein: number;
      fat: number;
    };
    "item image": string;
  }>;
}


interface IProps {}
const imgrestaurant = {
  image: 'https://picsum.photos/1200/600',
};

const Home: FC<IProps> = (props) => {
 
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  useEffect(() => {
    // Assuming restaurantData is imported and contains the JSON data
    setRestaurants(restaurantData.restaurants as IRestaurant[]);

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollViewContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ImageBackground source={require('../../assets/images/Campuses/SGB.jpg')} style={styles.image}>
            <View style={styles.imageOverlay} />
            <Text style={styles.imageText}>Alectra</Text>
          </ImageBackground>
          <ImageBackground source={require('../../assets/images/Campuses/Barrie-downtown.jpg')} style={styles.image}>
            <View style={styles.imageOverlay} />
            <Text style={styles.imageText}>Barrie Downtown</Text>
          </ImageBackground>
          <ImageBackground source={require('../../assets/images/Campuses/Barrie.jpg')} style={styles.image}>
            <View style={styles.imageOverlay} />
            <Text style={styles.imageText}>Barrie</Text>
          </ImageBackground>
          {/* Add more views for other images */}
          <ImageBackground source={require('../../assets/images/Campuses/Orangeville.jpg')} style={styles.image}>
            <View style={styles.imageOverlay} />
            <Text style={styles.imageText}>Orangeville</Text>
          </ImageBackground>
          <ImageBackground source={require('../../assets/images/Campuses/orillia.jpg')} style={styles.image}>
            <View style={styles.imageOverlay} />
            <Text style={styles.imageText}>Orillia</Text>
          </ImageBackground>
          <ImageBackground source={require('../../assets/images/Campuses/Owen.jpg')} style={styles.image}>
            <View style={styles.imageOverlay} />
            <Text style={styles.imageText}>Owen</Text>
          </ImageBackground>
          <ImageBackground source={require('../../assets/images/Campuses/SGB.jpg')} style={styles.image}>
            <View style={styles.imageOverlay} />
            <Text style={styles.imageText}>SGB</Text>
          </ImageBackground>
        </ScrollView>
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#FFDD95" />
        <TextInput
          style={styles.Searchinput}
          placeholder="Search"
          placeholderTextColor="#FFFFFF"
        />
        <Icon name="times-circle" size={20} color="#FFDD95" />
      </View>

      <FlatList
  data={restaurants}
  keyExtractor={(item) => item.id}
  renderItem={({ item: restaurant }) => (
    <View key={restaurant.id}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: restaurant.image }} style={styles.restaurantBanner} />
        <View style={styles.overlay}>
          <Text style={styles.name}>{restaurant.title}</Text>
          <StarRating rating={restaurant.rating} />
        </View>
      </View>
    </View>
  )}
/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242428',
  },

  scrollViewContainer: {
    height: 120,
  },
  imageContainer: {
    width: '100%',
    margin: 10,
  },
  restaurantBanner:{
    height: 200,
  },
  image: {
    flex: 1,
    position: 'relative', 
    width: 200,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject, // same as: position: 'absolute', top: 0, right: 0, bottom: 0, left: 0
    backgroundColor: 'rgba(0,0,0,0.3)', // semi-transparent black
  },
  imageText: {
    color: '#FFDD95', // bright color
    fontWeight: 'bold', // bold text
    fontSize: 18, // larger text
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#646465',
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 10,
    margin: 20,
  },
  Searchinput: {
    flex: 1,
    color: '#FFFFFF',
    marginLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  rating: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Home;
