import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Curve from '../../assets/svgImages/Curve.svg';
import Curve2 from '../../assets/svgImages/Curve2.svg';
import SvgComponent from '../../assets/svgImages/Curveindex';
import {Canvas, Oval} from '@shopify/react-native-skia';
import Card from './src/Card';
import FactCard from './src/FactCard';
import DetailCard from './src/DetailCard';

const Home = () => {
  return (
    <ScrollView>
      <DetailCard />
      <Card />
      <FactCard />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  // main: {
  //   backgroundColor: 'yellow',
  // },
  // crv: {},
  // gotoAddPost: {alignItems: 'center'},
  // canvascut: {
  //   // height: 62,
  //   overflow: 'hidden',
  // },
  // addpostButton: {
  //   width: 60,
  //   height: 60,
  //   borderRadius: 50,
  //   backgroundColor: '#C28C7E',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'absolute',
  //   zIndex: 3,
  //   bottom: 30,
  //   // top: 0,
  // },
  // addpostButtonEll: {
  //   width: 60,
  //   height: 60,
  //   borderRadius: 50,
  //   backgroundColor: '#C28C7E',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'absolute',
  //   zIndex: 3,
  //   bottom: 18,
  //   // top: 0,
  // },
  // footerIcons: {width: 28, height: 28},
  // box: {
  //   width: 100,
  //   height: 65,
  //   backgroundColor: 'lightgrey',
  //   // backgroundColor: 'blue',
  //   overflow: 'hidden',
  //   marginBottom: -30,
  // },
  // lefthalf: {
  //   position: 'absolute',
  //   width: 90,
  //   height: 90,
  //   left: -72,
  //   top: -10,
  //   backgroundColor: 'white',
  //   borderRadius: 50,
  // },
  // center: {},
  // righthalf: {
  //   position: 'absolute',
  //   width: 90,
  //   height: 90,
  //   right: -72,
  //   top: -10,
  //   backgroundColor: 'white',
  //   borderRadius: 50,
  // },
  // boxBottom: {
  //   width: 90,
  //   height: 30,
  //   // backgroundColor: 'blue',
  //   backgroundColor: 'white',
  //   overflow: 'hidden',
  // },
  // BTcircle: {
  //   position: 'absolute',
  //   top: -32,
  //   alignSelf: 'center',
  //   width: 55,
  //   height: 52,
  //   borderRadius: 50,
  //   backgroundColor: 'lightgrey',
  // },
});
