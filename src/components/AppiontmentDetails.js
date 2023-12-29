import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {icons} from '../helper/imageConstans';
import {fs, hp, wp} from '../helper/helper';
import {colors} from '../helper';
import {time} from 'console';

const AppointmentDetail = ({headerName, service, time}) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        <View style={styles.mainView}>
          <View>
            <Text style={styles.headerText}>{headerName}</Text>
            <Text style={[styles.text, {marginLeft: wp(10), marginTop: hp(6)}]}>
              {service}
            </Text>
          </View>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Image style={styles.image} source={icons.orders} />
            <Text style={[styles.text, {marginLeft: wp(5)}]}>{time}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.touchableView}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Image style={styles.image} source={icons.phone} />
            <Text style={[styles.text, {color: '#000', marginLeft: wp(5)}]}>
              {'Call'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
            }}>
            <Image style={styles.image} source={icons.note} />
            <Text style={[styles.text, {color: '#000', marginLeft: wp(13)}]}>
              {'Details'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: wp(13),
    borderWidth: 1,
    marginTop: hp(12),
    borderColor: colors.lightgrey,
  },
  text: {
    fontSize: fs(11),
    fontWeight: '500',
  },
  image: {
    height: hp(16),
    width: wp(16),
  },
  image1: {
    height: hp(18),
    width: wp(18),
  },
  mainView: {
    flexDirection: 'row',
    height: hp(79),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(20),
  },
  headerText: {
    fontSize: fs(20),
    fontWeight: '400',
    color: '#000',
    marginLeft: wp(10),
  },
  touchableView: {
    flexDirection: 'row',
    height: hp(44),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default AppointmentDetail;
