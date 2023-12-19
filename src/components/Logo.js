import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {hp, wp} from '../helper/helper';
import {colors} from '../helper/colors';

const Logo = ({style}) => {
  return (
    <View style={[styles.container, {marginTop: style}]}>
      <Image
        style={[styles.logo]}
        resizeMode="contain"
        source={require('../../assets/icon/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  logo: {
    height: hp(69),
    width: wp(97),
  },
});

export default Logo;
