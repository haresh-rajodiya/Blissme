import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Service from '../screen/tabs/customer/TabSlide/Service';
import Product from '../screen/tabs/customer/TabSlide/Product';
import About from '../screen/tabs/customer/TabSlide/About';
import Gallery from '../screen/tabs/customer/TabSlide/Gallery';
import {fs, hp, wp} from '../helper/helper';
import {colors} from '../helper';

const Tab = createMaterialTopTabNavigator();

const TabBar = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Service"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: colors.black,

          tabBarLabelStyle: {
            fontSize: fs(13.5),
            fontWeight: '600',
          },

          tabBarIndicatorStyle: {
            backgroundColor: '#e91e63',
            height: hp(11),
            // width: wp(57),
            borderRadius: 5,
          },
          tabBarStyle: {
            backgroundColor: colors.white,
            // height: hp(70),
            width: wp(350),
            alignSelf: 'center',
            shadowColor: colors.black,
            elevation: 4,
            borderRadius: 5,
          },
        }}>
        <Tab.Screen
          name="Service"
          component={Service}
          options={{tabBarLabel: 'Service'}}
        />
        <Tab.Screen
          name="Product"
          component={Product}
          options={{tabBarLabel: 'Product'}}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{tabBarLabel: 'About'}}
        />
        <Tab.Screen
          name="Gallery"
          component={Gallery}
          options={{tabBarLabel: 'Gallery'}}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(-15),
  },
});

export default TabBar;
