import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fs, hp, wp} from '../helper/helper';
import {colors} from '../helper';
import CheckBoxButton from './common/CheckBox';

const SelectHoliday = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <CheckBoxButton />
        <Text style={styles.text}>{'   Sat '}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <CheckBoxButton />
        <Text style={styles.text}>{'   Sun '}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: wp(162),
    justifyContent: 'space-between',
    marginTop: hp(7),
  },
  text: {
    fontSize: fs(16),
    fontWeight: '400',
    color: colors.black,
  },
});

export default SelectHoliday;
