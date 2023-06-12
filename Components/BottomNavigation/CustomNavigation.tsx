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
      <Shadow distance={10} startColor="#e5e5e5" offset={[0, 15]}>
        <View style={styles.footerContainer}>
          <View style={styles.curveCont}>
            <View style={styles.curve}>
              <CurveSVGComp
                fillColor={'#c2c2c2'}
                fillOpacity={0.4}
                strokeColor={'#c5c5c5'}
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
            <Pressable
              onPress={() => {
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
            </Pressable>
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
    height: 110,
  },
  footerContainer: {
    marginTop: 15,
    width: '100%',
    height: '100%',
    // height: 95,

    flexDirection: 'row',
    alignItems: 'center',
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
    width: 286,
    height: 53,
    alignSelf: 'center',
    paddingLeft: 36,
    // borderTopColor: '#fff',
    // borderTopWidth: 2,
  },

  footerOptionContainer: {
    marginBottom: 50,
    width: '100%',
    // height: 85,
    flexDirection: 'row',
    alignItems: 'center',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    justifyContent: 'space-evenly',
  },
  gotoAddPost: {
    width: 55,
    height: 55,
    alignItems: 'center',
    // position: 'absolute',
    // backgroundColor: 'yellow',
    top: -25,
    left: -5,
  },
  addpostButton: {
    // display: 'none',
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: '#C28C7E',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
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
  },
  gotoSearch: {alignItems: 'center'},

  gotoReels: {alignItems: 'center'},
  gotoProfile: {alignItems: 'center'},
  activeTabname: {
    fontWeight: '600',
  },
  tabName: {
    paddingTop: 5,
    color: '#000',
    fontSize: 12,
  },
});
