import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
const CustomNavigation = ({state, descriptors, navigation}) => {
  //   const route = useRoute();
  //   console.log(state);
  //   console.log('-----------------------');
  //   console.log(descriptors);
  //   console.log('-----------------------');
  //   console.log(route);
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    // console.log(state.index);
    setActiveTab(state.index);
  });
  return (
    <View style={styles.footer}>
      <View style={styles.footerContainer}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <View style={styles.gotoHome}>
            {activeTab === 0 ? (
              <Image
                style={styles.footerIcons}
                source={require('../../assets/bottom_tab/home_selected.png')}></Image>
            ) : (
              <Image
                style={styles.footerIcons}
                source={require('../../assets/bottom_tab/Vector.png')}></Image>
            )}

            <Text
              style={[
                styles.tabName,
                activeTab === 0 ? styles.activeTabname : null,
              ]}>
              HOME
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Search')}>
          <View style={styles.gotoSearch}>
            {activeTab === 1 ? (
              <Image
                style={styles.footerIcons}
                source={require('../../assets/bottom_tab/search_selected.png')}></Image>
            ) : (
              <Image
                style={styles.footerIcons}
                source={require('../../assets/bottom_tab/searchnormal1.png')}></Image>
            )}

            <Text
              style={[
                styles.tabName,
                activeTab === 1 ? styles.activeTabname : null,
              ]}>
              SEARCH
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('AddPost')}>
          <View style={styles.gotoAddPost}>
            <View style={styles.addpostButton}>
              <Image
                style={styles.footerIcons}
                source={require('../../assets/bottom_tab/reviews.png')}></Image>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Reviews')}>
          <View style={styles.gotoReels}>
            {activeTab === 3 ? (
              <Image
                style={styles.footerIcons}
                source={require('../../assets/bottom_tab/reviews.png')}></Image>
            ) : (
              <Image
                style={styles.footerIcons}
                source={require('../../assets/bottom_tab/reviews.png')}></Image>
            )}

            <Text
              style={[
                styles.tabName,
                activeTab === 3 ? styles.activeTabname : null,
              ]}>
              REVIEWS
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Me')}>
          <View style={styles.gotoProfile}>
            {activeTab === 4 ? (
              <Image
                style={styles.footerIcons}
                source={require('../../assets/bottom_tab/user-4.png')}></Image>
            ) : (
              <Image
                style={styles.footerIcons}
                source={require('../../assets/bottom_tab/user-2.png')}></Image>
            )}

            <Text
              style={[
                styles.tabName,
                activeTab === 4 ? styles.activeTabname : null,
              ]}>
              ME
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomNavigation;

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    // backgroundColor: 'yellow',
    height: 100,
    justifyContent: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
  footerIcons: {width: 24, height: 24},
  gotoHome: {
    alignItems: 'center',
  },
  gotoSearch: {alignItems: 'center'},
  gotoAddPost: {alignItems: 'center'},
  gotoReels: {alignItems: 'center'},
  gotoProfile: {alignItems: 'center'},
  activeTabname: {
    fontWeight: '600',
  },
  tabName: {
    paddingTop: 5,
    color: '#000',
  },
  addpostButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#C28C7E',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 50,
  },
});
