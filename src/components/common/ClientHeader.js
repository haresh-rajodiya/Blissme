import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {hp, wp} from '../../helper/helper';
import {colors} from '../../helper/colors';
import {commonStyles} from '../../helper/commonStyle';

const ClientHeader = ({
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
        <Text style={[commonStyles.HeaderText, {color: colors.white}]}>
          {title}
        </Text>
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
    flexDirection: 'row',
    // marginTop: hp(20),
    zIndex: 2,
    height: hp(64),
    backgroundColor: '#1D1B44',
    alignItems: 'center',
    paddingHorizontal: wp(29),
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
});

export default ClientHeader;
