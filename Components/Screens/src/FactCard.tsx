import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const FactCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
        }}
        style={styles.cardImage}></Image>
      <View style={styles.cardContent}>
        <Text style={styles.textStyle}>Fourth Trimester</Text>
        <Text style={styles.textStyleLabel}>
          6 Things No one tells you about postpartum
        </Text>
      </View>
    </View>
  );
};

export default FactCard;

const styles = StyleSheet.create({
  card: {
    width: '95%',
    height: 400,
    alignSelf: 'center',
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'orange',
    marginVertical: 5,
  },

  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    position: 'absolute',
    bottom: 30,
    paddingLeft: 20,
    // backgroundColor: 'yellow',
  },
  textStyle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 22,
    marginVertical: 15,
  },
  textStyleLabel: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '600',
    lineHeight: 38,
  },
});
