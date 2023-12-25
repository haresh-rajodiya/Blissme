import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import {commonStyles} from '../../helper/commonStyle';
import {fs, hp, wp} from '../../helper/helper';
import {icons} from '../../helper/imageConstans';
import {colors} from '../../helper';

const About = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[commonStyles.headerRightContainer, {height: hp(19)}]}
        addImage={icons.drawer}
        drawer={() => navigation.openDrawer()}
        title={'About'}
      />
      <View style={{marginHorizontal: wp(16), marginTop: hp(20)}}>
        <Text style={styles.text}>
          {
            'If you have a query relating to your booking, account, or need any other support then submit an enquiry to'
          }
        </Text>
        <Text style={[styles.text, {color: colors.pink}]}>
          {'cs@blissme.hk.'}{' '}
          <Text style={[styles.text, {color: colors.black}]}>
            {
              'A member of the Customer Service team will investigate and get back to you as soon as possible.'
            }
          </Text>
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

export default About;
