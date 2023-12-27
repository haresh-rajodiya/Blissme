import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../helper';
import {fs, hp, wp} from '../../helper/helper';

const ClientButton = ({title, count}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text1}>{count}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pink,
    height: hp(86),
    width: wp(175),
    borderRadius: 3,
  },
  text: {
    fontSize: fs(17),
    fontWeight: '400',
    color: colors.white,
  },
  text1: {
    fontSize: fs(30),
    fontWeight: '900',
    color: colors.white,
  },
});

export default ClientButton;
