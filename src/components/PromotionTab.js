import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {fs, hp, wp} from '../helper/helper';
import {colors} from '../helper';
import Booked from '../screen/tabs/client/AppointmentTab/Booked';
import Canceled from '../screen/tabs/client/AppointmentTab/Canceled';
import ActiveTab from '../screen/tabs/client/PramotionTab/Active';
import Expired from '../screen/tabs/client/PramotionTab/Expired';

const Tab = createMaterialTopTabNavigator();

const PromotionTab = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="CouponDetails"
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
          name="ActiveTab"
          component={ActiveTab}
          options={{tabBarLabel: 'Active'}}
        />
        <Tab.Screen
          name="Expired"
          component={Expired}
          options={{tabBarLabel: 'Expired'}}
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

export default PromotionTab;
