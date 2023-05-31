import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomTab from './Components/BottomTab';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <View>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
