import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const DetailCard = () => {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.TopBar}>
          <Text>Pediatric Review</Text>
          <View style={styles.LikeAndTime}>
            <Text>(12)</Text>
            <Text>2 mins ago</Text>
          </View>
        </View>
        <View style={styles.imgCont}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
            }}
            style={styles.cardImage}></Image>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.BtntextStyle}>Partner to Birthing Parent</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Desc}>
          <View style={styles.RatingAndRec}>
            <View style={styles.Rating}>
              <Text>Overall Rating</Text>
              <Image
                style={styles.footerIcons}
                source={require('../../../assets/bottom_tab/reviews.png')}></Image>
            </View>
            <View style={styles.Recom}>
              <Text>Recommendation</Text>
              <Image
                style={styles.footerIcons}
                source={require('../../../assets/bottom_tab/reviews.png')}></Image>
            </View>
          </View>
          <View style={styles.RelatedInfo}>
            <View style={styles.infoLine}>
              <Text>Hospital</Text>
              <Text>Hospital</Text>
            </View>
          </View>
          <View style={styles.infoLine}>
            <Text>Hospital</Text>
            <Text>Hospital</Text>
          </View>
        </View>
        <View>
          <Text>
            I felt very welcome and the nurses were very observant and super
            availabl...
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailCard;

const styles = StyleSheet.create({
  card: {
    width: '98%',
    height: 400,
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    padding: 20,
  },
  TopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  LikeAndTime: {
    flexDirection: 'row',
  },
  imgCont: {
    width: '100%',
    height: '55%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },

  button: {
    // width: 160,
    position: 'absolute',
    bottom: 20,
    marginLeft: 15,
    paddingVertical: 8,
    paddingHorizontal: 25,
    backgroundColor: '#fc6f65',
    alignItems: 'center',
    borderRadius: 10,
  },
  BtntextStyle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
  Desc: {},
  RatingAndRec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerIcons: {
    width: 24,
    height: 24,
  },
  Recom: {},
  RelatedInfo: {},
  infoLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
