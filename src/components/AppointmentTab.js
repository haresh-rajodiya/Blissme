import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {fs, hp, wp} from '../helper/helper';
import {colors} from '../helper';
import Booked from '../screen/tabs/client/AppointmentTab/Booked';
import Canceled from '../screen/tabs/client/AppointmentTab/Canceled';

const Tab = createMaterialTopTabNavigator();

const AppointmentTab = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="AppointmentDetails"
        screenOptions={{
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.grey,

          tabBarLabelStyle: {
            fontSize: fs(12),
            fontWeight: '800',
          },

          tabBarIndicatorStyle: {
            height: hp(0),
          },
          tabBarStyle: {
            backgroundColor: colors.white,
            height: hp(46),
            width: '95%',
            alignSelf: 'center',
            shadowColor: colors.black,
            elevation: 5,
            borderRadius: 12,
            marginTop: hp(23),
          },
        }}>
        <Tab.Screen
          name="Booked"
          component={Booked}
          options={{tabBarLabel: 'Booked appointments'}}
        />
        <Tab.Screen
          name="Canceled"
          component={Canceled}
          options={{tabBarLabel: 'Cancelled Appointments'}}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: hp(20),
  },
});

export default AppointmentTab;
