import {View, Tex, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Image} from 'react-native-animatable';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../helper/colors';
import NearbyStore from '../screen/tabs/customer/NearbyStore';
import Orders from '../screen/tabs/customer/Orders';
import Profile from '../screen/tabs/customer/Profile';
import {hp, wp} from '../helper/helper';
import Home from '../screen/tabs/customer/Home';
import {icons} from '../helper/imageConstans';
import TopSalon from '../screen/tabs/customer/TopSalon';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FaceMassage from '../screen/tabs/customer/FaceMassage';
import OurProduct from '../screen/tabs/customer/OurProduct';
import SetLocation from '../screen/tabs/customer/SetLocation';
import Offers from '../screen/tabs/customer/Offers';
import Conditions from '../screen/tabs/customer/Conditions';
import Policy from '../screen/tabs/Policy';
import About from '../screen/tabs/About';

const Bottom = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TopSalon" component={TopSalon} />
      <Stack.Screen name="FaceMassage" component={FaceMassage} />
      <Stack.Screen name="OurProduct" component={OurProduct} />
    </Stack.Navigator>
  );
};
const ProfileTab = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SetLocation" component={SetLocation} />
      <Stack.Screen name="Offers" component={Offers} />
      <Stack.Screen name="Conditions" component={Conditions} />
      <Stack.Screen name="Policy" component={Policy} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

const BottomNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <Bottom.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.white,
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '400',
            alignSelf: 'center',
          },
          headerShadowVisible: true,
        }}>
        <Bottom.Screen
          name="HomeTab"
          component={HomeTab}
          options={{
            headerShown: false,
            tabBarActiveTintColor: '#F93A8B',
            tabBarIcon: tabInfo => {
              return (
                <Image
                  style={[
                    styles.BottomIcon,
                    {tintColor: tabInfo.focused ? '#F93A8B' : '#000'},
                  ]}
                  source={icons.home}
                />
              );
            },
          }}
        />
        <Bottom.Screen
          name="Nearby"
          component={NearbyStore}
          options={{
            headerShown: false,
            tabBarActiveTintColor: '#F93A8B',
            tabBarIcon: tabInfo => {
              return (
                <Image
                  style={[
                    styles.BottomIcon,
                    {tintColor: tabInfo.focused ? '#F93A8B' : '#000'},
                  ]}
                  source={icons.store}
                />
              );
            },
          }}
        />
        <Bottom.Screen
          name="Orders"
          component={Orders}
          options={{
            headerShown: false,
            tabBarActiveTintColor: '#F93A8B',
            tabBarIcon: tabInfo => {
              return (
                <Image
                  style={[
                    styles.BottomIcon,
                    {tintColor: tabInfo.focused ? '#F93A8B' : '#000'},
                  ]}
                  source={icons.orders}
                />
              );
            },
          }}
        />
        <Bottom.Screen
          name="ProfileTab"
          component={ProfileTab}
          options={{
            headerShown: false,
            tabBarActiveTintColor: '#F93A8B',

            tabBarIcon: tabInfo => {
              return (
                <Image
                  style={[
                    styles.BottomIcon,
                    {tintColor: tabInfo.focused ? '#F93A8B' : '#000'},
                  ]}
                  source={icons.profile}
                />
              );
            },
          }}
        />
      </Bottom.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  BottomIcon: {
    height: hp(18),
    width: wp(18),
    resizeMode: 'cover',
  },
});
export default BottomNavigator;
