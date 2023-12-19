import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import Header from '../../../components/Header';
import {commonStyles} from '../../../helper/commonStyle';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import {hp, wp} from '../../../helper/helper';
import {icons} from '../../../helper/imageConstans';
import StylistsList from '../../../components/stylistsList';
import CalendarView from '../../../components/Calendar';
import AppointmentTime from '../../../components/AppointmentTimeList';
import AddToCartButton from '../../../components/AddToCartButton';

const Appointment = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[commonStyles.headerRightIcon]}
        drawer={() => navigation.goBack()}
        addImage={icons.back}
        title={'Book your appointment'}
        rightContainer={commonStyles.headerRightContainer}
        rightIcon={styles.headerRightContainer}
        rightImage={icons.shoppingCart}
      />
      <ScrollView>
        <View style={{marginHorizontal: wp(16)}}>
          <Text style={[commonStyles.HeaderText, {marginTop: hp(20)}]}>
            {'Select your Stylists'}
          </Text>
          <StylistsList />
        </View>
        <CalendarView />
        <Text
          style={[
            commonStyles.HeaderText,
            {marginTop: hp(20), marginHorizontal: wp(16)},
          ]}>
          {'Select the time'}
        </Text>
        <AppointmentTime />
        <View style={styles.alertView}>
          <ImageBackground style={styles.image} source={icons.Ellipse}>
            <Image
              style={[styles.image, {width: wp(4), height: hp(14)}]}
              source={icons.I}
            />
          </ImageBackground>
          <Text
            style={[
              commonStyles.CommonText,
              {marginLeft: wp(8), color: '#666'},
            ]}>
            {
              'Based on your services time slot automatically allocated and  5 - 10 min maybe delay depends on your services'
            }
          </Text>
        </View>
        <View style={{height: hp(70)}} />
      </ScrollView>
      <AddToCartButton
        title={'Move to Cart'}
        value={'1476'}
        text={'Total'}
        cart={() => navigation.navigate('Cart')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerRightContainer: {
    height: hp(24),
    width: wp(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: hp(18),
    width: wp(18),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3),
  },
  alertView: {
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: wp(16),
    marginTop: hp(30),
  },
});

export default Appointment;
