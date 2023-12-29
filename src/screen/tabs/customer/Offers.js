import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import Header from '../../../components/Header';
import {fs, hp, wp} from '../../../helper/helper';
import {commonStyles} from '../../../helper/commonStyle';
import {icons} from '../../../helper/imageConstans';
import {colors} from '../../../helper';
import OfferButton from '../../../components/OfferButton';
import OfferSwiper from '../../../components/OfferSwiper';

const Offers = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[commonStyles.headerRightContainer, {height: hp(19)}]}
        addImage={icons.drawer}
        drawer={() => navigation.openDrawer()}
        title={'Offers'}
      />
      <Text
        style={[
          commonStyles.HeaderText,
          {marginTop: hp(26), marginLeft: wp(16)},
        ]}>
        {'New Offer'}
      </Text>
      <ImageBackground source={icons.sap} style={styles.image}>
        <Text style={styles.text}>{'10%'}</Text>
        <Text
          style={[
            commonStyles.HeaderText,
            {fontWeight: '900', color: colors.white},
          ]}>
          {'Spa Offer'}
        </Text>
        <Text
          style={[
            commonStyles.HeaderText,
            {fontWeight: '900', marginTop: hp(7), color: colors.white},
          ]}>
          {' Limited Time Offer'}
        </Text>
      </ImageBackground>
      <OfferButton title={'20 % Offer for Face Massage'} height={hp(65)} />
      <OfferSwiper />
      <OfferButton
        title={'5 % Cash Back Offer for new user '}
        height={hp(65)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: hp(200),
    marginHorizontal: wp(16),
    marginTop: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  text: {
    fontSize: fs(50),
    color: colors.pink,
    fontWeight: '900',
  },
});

export default Offers;
