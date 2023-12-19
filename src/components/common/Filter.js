import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {icons} from '../../helper/imageConstans';
import {fs, hp, wp} from '../../helper/helper';
import {colors} from '../../helper';

const FilterView = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{'Filter'}</Text>
      <Image
        style={styles.image}
        source={require('../../../assets/icon/filter.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp(19),
    flexDirection: 'row',
    marginHorizontal: wp(16),
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: fs(16),
    fontWeight: '500',
    color: colors.black,
  },
  image: {
    height: hp(14),
    width: wp(14),
    marginHorizontal: wp(6),
    marginVertical: wp(4),
  },
});

export default FilterView;
