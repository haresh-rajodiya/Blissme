import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {commonStyles} from '../../../../helper/commonStyle';
import {fs, hp, wp} from '../../../../helper/helper';
import {icons} from '../../../../helper/imageConstans';
import {colors} from '../../../../helper';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={[commonStyles.HeaderText, {marginTop: hp(20)}]}>
        {'About  Le Spa by Jan'}
      </Text>
      <Text style={[commonStyles.CommonText, {marginTop: hp(10)}]}>
        {
          'Located in the heart of the city, Le Spa by Jan is an independent, high-quality spa with a passionate skilled team offering a calm retreat away from the hustle and bustle of HK. As a boutique Spa, we believe in excellency in service, unique care, specially selected products yet affordable prices.'
        }
      </Text>
      <Text style={[commonStyles.HeaderText, {marginTop: hp(20)}]}>
        {'Service on Day'}
      </Text>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={[commonStyles.CommonText, {marginTop: hp(10)}]}>
          {'Monday - Thursday '}
        </Text>
        <Text style={[commonStyles.CommonText, {marginTop: hp(10)}]}>
          {'8:30 AM - 9:00 PM'}
        </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={[commonStyles.CommonText]}>{'Friday - Sunday'}</Text>
        <Text style={[commonStyles.CommonText]}>{'10:00 AM - 2:00 PM'}</Text>
      </View>
      <Text style={[commonStyles.HeaderText, {marginTop: hp(20)}]}>
        {'Location'}
      </Text>
      <View style={{flexDirection: 'row', marginTop: hp(10)}}>
        <TouchableOpacity>
          <Image
            style={{height: hp(80), width: wp(130)}}
            source={icons.LeSpa}
          />
        </TouchableOpacity>
        <View style={{marginLeft: wp(10)}}>
          <Text style={[commonStyles.CommonText, {width: '65%'}]}>
            {'2/F Stanley 11, No. 11 Stanley Street, Hong Kong China'}
          </Text>
          <View style={styles.mapView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{height: hp(13), width: wp(9)}}
                source={icons.locationDark}
              />
              <Text style={commonStyles.CommonText}>{' 2.5 KM'}</Text>
            </View>
            <TouchableOpacity>
              <Text style={[commonStyles.CommonText, {color: '#2CA1F5'}]}>
                {'See the Location'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={[commonStyles.HeaderText, {marginTop: hp(12)}]}>
        {'Contact Information'}
      </Text>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={styles.text}>{'Website'}</Text>
        <TouchableOpacity>
          <Text style={styles.contactText}>{'visit the website'}</Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={styles.text}>{'Call'}</Text>
        <TouchableOpacity>
          <Text style={styles.contactText}>{'+852 2815 3307'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp(16),
  },
  mapView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '62%',
    marginTop: hp(15),
  },
  text: {
    fontSize: fs(15),
    color: colors.pink,
    fontWeight: '500',
    marginTop: hp(10),
  },
  contactText: {
    fontSize: fs(15),
    color: '#2CA1F5',
    fontWeight: '500',
    marginTop: hp(10),
  },
});

export default About;
