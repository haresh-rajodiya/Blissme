import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {fs, hp, wp} from '../helper/helper';
import {colors} from '../helper';
import OrderAppointment from '../screen/tabs/customer/OrderTabSlide/Appointment';
import OrderProduct from '../screen/tabs/customer/OrderTabSlide/Product';

const Tab = createMaterialTopTabNavigator();

const OrderTabBar = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="OrderAppointment"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: colors.black,

          tabBarLabelStyle: {
            fontSize: fs(16),
            fontWeight: '600',
          },

          tabBarIndicatorStyle: {
            height: hp(0),
          },
          tabBarStyle: {
            backgroundColor: colors.white,
            height: hp(50),
            width: '95%',
            alignSelf: 'center',
            shadowColor: colors.black,
            elevation: 5,
            borderRadius: 12,
          },
        }}>
        <Tab.Screen
          name="Appointment"
          component={OrderAppointment}
          options={{tabBarLabel: 'Appointment'}}
        />
        <Tab.Screen
          name="OrderProduct"
          component={OrderProduct}
          options={{tabBarLabel: 'Product'}}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(20),
  },
});

export default OrderTabBar;
