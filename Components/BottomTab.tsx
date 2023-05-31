import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Search from './Screens/Search';
import AddPost from './Screens/AddPost';
import Reviews from './Screens/Reviews';
import Me from './Screens/Me';
import CustomNavigation from './BottomNavigation/CustomNavigation';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={Home} />
    //   <Tab.Screen name="Search" component={Search} />
    //   <Tab.Screen name="AddPost" component={AddPost} />
    //   <Tab.Screen name="Reviews" component={Reviews} />
    //   <Tab.Screen name="Me" component={Me} />
    // </Tab.Navigator>
    <View style={{height: '100%'}}>
      <Tab.Navigator
        tabBar={props => <CustomNavigation {...props} />}
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="AddPost" component={AddPost} />
        <Tab.Screen name="Reviews" component={Reviews} />
        <Tab.Screen name="Me" component={Me} />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  footerIcons: {width: 24, height: 24},
});
