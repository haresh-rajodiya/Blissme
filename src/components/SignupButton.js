import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {hp, wp} from '../helper/helper';
import {colors} from '../helper/colors';

const SignupButton = ({addImage, onLongPress, onPress, style}) => {
  return (
    <View>
      {/* <TouchableOpacity style={styles.signuplogo}  />  */}
      <TouchableOpacity
        onPress={() => onPress()}
        onLongPress={() => onLongPress()}
        style={[styles.signuplogo, {backgroundColor: style}]}>
        {addImage && <Image style={[styles.image]} source={addImage} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  signuplogo: {
    height: hp(43),
    width: wp(98),
    backgroundColor: colors.white,
    marginHorizontal: wp(15),
    shadowColor: colors.black,
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: hp(23),
    width: wp(23),
  },
});

export default SignupButton;
