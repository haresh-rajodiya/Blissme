import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {hp, wp} from '../helper/helper';
import {colors} from '../helper/colors';
import {commonStyles} from '../helper/commonStyle';

const Header = ({
  addImage,
  title,
  onPress,
  rightImage,
  rightContainer,
  rightIcon,
  leftContainer,
  leftIcon,
  drawer,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={drawer} style={[leftContainer]}>
        <Image style={leftIcon} source={addImage} />
      </TouchableOpacity>
      <View>
        <Text style={[commonStyles.HeaderText]}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={[rightContainer]}>
        <Image style={rightIcon} source={rightImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginHorizontal: wp(14),
    marginTop: hp(20),
    zIndex: 2,
  },
  back: {
    left: 0,
    width: wp(7),
    height: hp(14),
    marginLeft: wp(8),
  },
  image: {
    height: hp(14),
    width: wp(7),
  },
  titleText: {},
});

export default Header;
