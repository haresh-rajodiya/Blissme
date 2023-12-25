import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import {commonStyles} from '../../helper/commonStyle';
import {fs, hp, wp} from '../../helper/helper';
import {icons} from '../../helper/imageConstans';
import {colors} from '../../helper';

const Policy = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[commonStyles.headerRightContainer, {height: hp(19)}]}
        addImage={icons.drawer}
        drawer={() => navigation.openDrawer()}
        title={'Privacy & Policy'}
      />
      <View style={{marginHorizontal: wp(16), marginTop: hp(20)}}>
        <Text style={[styles.text, {color: colors.pink}]}>
          {'Introduction'}
        </Text>
        <Text style={styles.text}>
          {
            'This privacy and cookies policy ("Privacy Policy") details data used on www.blissme.hk (the "Website"), the BlissMe Customer mobile application software and the BlissMe Partner (salon Spa management tool) application software, of which are available for download from App Store and Google Play (the "Apps"), embedded on Partner Sites and on our salon and spa partners (“Partners”)’ own websites and social media pages, through which customers can make bookings directly with BlissMe App.'
          }
        </Text>
      </View>
      <View style={{marginHorizontal: wp(16), marginTop: hp(20)}}>
        <Text style={styles.text}>
          {
            'The data controller for your information is BlissMe Technology Limited. ("BLissMe App”, “BlissMe”, "we", "our" or "us"). You can write to us at: Room 1002, 10/F David House, 8-20 Nanking Street, Jordan, Kowloon, Hong Kong. or email us on cs@blissme.hk or WhatsApp us on 90802890.'
          }
        </Text>
      </View>
      <View style={{marginHorizontal: wp(16), marginTop: hp(20)}}>
        <Text style={styles.text}>
          {
            ' “BlissMe” shares your personal information with other entities in its corporate group ("Group Companies"). We are committed to protecting the privacy of our users and customers. This Privacy Policy is intended to inform you how we gather, define, and use information that could identify you, such as your name, email address, address, other contact details or online identifiers, other information that you provide to us when using the Platform ("Personal Information") and also what Cookies we use. Please take a moment to read this Privacy Policy carefully.'
          }
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: '400',
    fontSize: fs(16),
  },
});

export default Policy;
