import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {icons} from '../helper/imageConstans';
import {fs, hp, wp} from '../helper/helper';

const DeleteSlot = ({marginTop}) => {
  return (
    <TouchableOpacity style={[styles.container, {marginTop: marginTop}]}>
      <Image style={styles.image} source={icons.deleteBlack} />
      <Text style={styles.text}>{'Delete Time slot'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: wp(16),
    alignSelf: 'flex-start',
  },
  text: {
    marginLeft: wp(2),
    fontSize: fs(14),
    fontWeight: '400',
    color: 'black',
  },
  image: {height: hp(20), width: wp(20)},
});

export default DeleteSlot;
