import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import CurveSVGComp from '../../assets/svgImages/Curveindex';
import {Shadow} from 'react-native-shadow-2';

const {height, width} = Dimensions.get('window');

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
      <Shadow distance={20} startColor="#e5e5e5" offset={[0, 28]}>
        <View style={styles.footerContainer}>
          <View style={styles.curveCont}>
            <View style={styles.curve}>
              <CurveSVGComp
                fillColor={'#e5e5e5'}
                fillOpacity={0.4}
                strokeColor={'#e6e6e6'}
                strokeOpacity={1}
                strokeWidth={1}
              />
            </View>
            {/* <Pressable
              onPress={() => {
                console.log('click');
                navigation.navigate('AddPost');
              }}>
              <View style={styles.gotoAddPost}>
                <View style={styles.addpostButton}> 
                  <View style={styles.plus}>
                    <View style={styles.horiLine}></View>
                    <View style={styles.vertiLine}></View>
                  </View>
                </View>
              </View>
            </Pressable> */}
          </View>
          <View style={styles.footerOptionContainer}>
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
            <View style={styles.gotoAddPost}>
              <Pressable
                onPress={() => {
                  navigation.navigate('AddPost');
                }}>
                <View style={styles.addpostButton}>
                  <View style={styles.plus}>
                    <View style={styles.horiLine}></View>
                    <View style={styles.vertiLine}></View>
                  </View>
                </View>
              </Pressable>
            </View>
            <Pressable onPress={() => navigation.navigate('Reviews')}>
              <View style={styles.gotoReels}>
                {activeTab === 3 ? (
                  <Image
                    style={styles.footerIcons}
                    source={require('../../assets/bottom_tab/review_selected.png')}></Image>
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
                    style={[styles.footerIcons, styles.MeIcon]}
                    source={require('../../assets/bottom_tab/user-4.png')}></Image>
                ) : (
                  <Image
                    style={[styles.footerIcons, styles.MeIcon]}
                    source={require('../../assets/bottom_tab/user-2.png')}></Image>
                )}

                <Text
                  style={[
                    styles.MetabName,
                    activeTab === 4 ? styles.activeTabname : null,
                  ]}>
                  ME
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Shadow>
    </View>
  );
};

export default CustomNavigation;

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    backgroundColor: '#fff',
    // backgroundColor: 'yellow',
    height: 100,
  },
  footerContainer: {
    marginTop: 15,
    width: '100%',
    height: '100%',
    // height: 95,

    flexDirection: 'row',
    // alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  curveCont: {
    position: 'absolute',
    width: width,
    height: '100%',
    alignItems: 'center',
  },
  curve: {
    // backgroundColor: 'yellow',
    position: 'absolute',
    top: 0,
    width: 208,
    height: 52,
    alignSelf: 'center',
    paddingLeft: 6,
    // borderTopColor: '#fff',
    // borderTopWidth: 2,
  },
  // curve: {
  //   position: 'absolute',
  //   top: 0,
  //   width: 286,
  //   height: 53,
  //   alignSelf: 'center',
  //   paddingLeft: 36,
  // },

  footerOptionContainer: {
    // marginBottom: 48,
    // position: 'absolute',
    marginTop: 0,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    justifyContent: 'space-evenly',
    // backgroundColor: 'yellow',
  },
  gotoAddPost: {
    // position: 'absolute',
    width: 55,
    height: 55,

    // alignItems: 'center',
    // alignSelf: 'center',
    // backgroundColor: 'yellow',
    // top: -28,
    // left: -5,
  },
  addpostButton: {
    // display: 'none',
    position: 'absolute',
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: '#C28C7E',
    justifyContent: 'center',
    alignItems: 'center',
    top: -25,
    left: -3.5,
    // zIndex: 10,
  },
  plus: {justifyContent: 'center', alignItems: 'center'},
  horiLine: {
    borderWidth: 2,
    borderColor: '#fff',
    width: 20,
    borderRadius: 10,
    position: 'absolute',
  },
  vertiLine: {
    borderWidth: 2,
    borderColor: '#fff',
    width: 20,
    borderRadius: 10,
    transform: [{rotate: '90deg'}],
  },
  footerIcons: {width: 20, height: 20},
  gotoHome: {
    alignItems: 'center',
    // backgroundColor: 'yellow',
    width: 40,
  },
  gotoSearch: {
    alignItems: 'center',
    // backgroundColor: 'yellow',

    width: 50,
  },

  gotoReels: {
    alignItems: 'center',
    // backgroundColor: 'yellow',
    width: 55,
  },
  gotoProfile: {
    alignItems: 'center',
    // backgroundColor: 'yellow',
    width: 28,
  },
  MeIcon: {
    height: 23,
    // backgroundColor: 'yellow',
  },
  activeTabname: {
    fontWeight: '500',
  },
  tabName: {
    paddingTop: 8,
    color: '#000',
    fontSize: 12,
  },
  MetabName: {
    paddingTop: 5,
    color: '#000',
    fontSize: 12,
    // backgroundColor: 'grey',
  },
});
