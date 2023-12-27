import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {icons} from '../helper/imageConstans';
import {fs, hp, wp} from '../helper/helper';
import {colors} from '../helper';

const SubCategories = ({details, amount, timeLoop, time, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{details}</Text>
      <Text style={styles.text1}>
        {'HK$ '}
        <Text>
          {amount}
          <Text>
            {' / '}
            <Text>
              {timeLoop}
              <Text>{time}</Text>
            </Text>
          </Text>
        </Text>
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Image style={{height: hp(14), width: wp(14)}} source={icons.edit} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(16),
    flexDirection: 'row',
    marginTop: hp(40),
  },
  text1: {
    fontSize: fs(15),
    fontWeight: '500',
    color: colors.black,
  },
  text: {
    width: wp(214),
    fontSize: fs(14),
    fontWeight: '400',
    color: colors.black,
  },
});

export default SubCategories;
