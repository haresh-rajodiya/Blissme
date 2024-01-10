import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {hp, wp} from '../../helper/helper';
import {commonStyles} from '../../helper/commonStyle';
import {icons} from '../../helper/imageConstans';

const CountButton = ({add, remove}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={styles.container} onPress={remove}>
        <Image style={{width: wp(15), height: hp(2)}} source={icons.remove} />
      </TouchableOpacity>
      <Text style={[commonStyles.HeaderText]}>{' 25 '}</Text>
      <TouchableOpacity style={styles.container} onPress={add}>
        <Image style={{width: wp(15), height: hp(15)}} source={icons.add} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(28),
    height: hp(30),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F93A8B',
  },
});

export default CountButton;
