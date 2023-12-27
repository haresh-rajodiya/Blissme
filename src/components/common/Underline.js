import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../helper';
import {hp, wp} from '../../helper/helper';

const Underline = () => {
  return <View style={styles.mainView}></View>;
};

const styles = StyleSheet.create({
  mainView: {
    height: hp(1),
    backgroundColor: colors.grey,
    marginHorizontal: wp(16),
    // marginTop: hp(5),
  },
});

export default Underline;
