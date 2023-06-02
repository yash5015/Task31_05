import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';

const Card = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
        }}
        style={styles.cardImage}></Image>
      <View style={styles.cardContent}>
        <Text style={styles.textStyle}>Leave a review for the commnity</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.BtntextStyle}>Leave a review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '95%',
    height: 250,
    alignSelf: 'center',
    borderRadius: 14,
    overflow: 'hidden',
    marginVertical: 5,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    position: 'absolute',
    bottom: 30,
    marginLeft: 10,
  },
  textStyle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 22,
    marginVertical: 10,
  },
  button: {
    width: 160,
    height: 45,
    padding: 10,
    backgroundColor: '#fc6f65',
    alignItems: 'center',
    borderRadius: 25,
  },
  BtntextStyle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});
