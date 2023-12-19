import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {hp, wp} from '../../helper/helper';

const Button = ({onPress, title, addImage, onLongPress, style}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      onLongPress={() => onLongPress()}
      style={[styles.Btn, {marginTop: style}]}>
      {addImage && <Image style={[styles.image]} source={addImage} />}
      {title && (
        <Text style={[styles.BtnText, {color: '#ffffff'}]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Btn: {
    height: hp(43),
    width: wp(293),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#000',
    marginTop: hp(83),
  },
  image: {
    height: hp(23),
    width: wp(23),
  },
  BtnText: {
    fontSize: hp(20),
    fontWeight: '500',
  },
});

export default Button;
