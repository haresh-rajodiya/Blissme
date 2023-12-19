import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {fs, hp, wp} from '../../helper/helper';
import {colors} from '../../helper';

const CommonButton = ({title, GoToCart}) => {
  return (
    <TouchableOpacity style={styles.buttonView} onPress={GoToCart}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonView: {
    height: hp(43),
    width: wp(169),
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: fs(15),
    fontWeight: '700',
    color: colors?.white,
  },
});

export default CommonButton;
