import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../helper';
import {fs, hp, wp} from '../helper/helper';

const OfferButton = ({title, height}) => {
  return (
    <TouchableOpacity style={[styles.container, {height: height}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pink,
    // height: hp(65),
    marginHorizontal: wp(16),
    borderRadius: 5,
    marginTop: hp(20),
  },
  text: {
    fontSize: fs(20),
    fontWeight: '500',
    color: colors.white,
  },
});

export default OfferButton;
