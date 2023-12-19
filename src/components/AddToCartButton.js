import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import CommonButton from './common/CommonButton';
import {fs, hp, wp} from '../helper/helper';
import {colors} from '../helper';

const AddToCartButton = ({title, value, text, cart}) => {
  return (
    <SafeAreaView style={styles.positionView}>
      <View>
        <Text style={styles.positionText}>
          {text}
          <Text style={styles.positionText}>
            {' HK$  '}
            <Text>{value}</Text>
          </Text>
        </Text>
      </View>
      <View>
        <CommonButton title={title} GoToCart={cart} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  positionView: {
    height: hp(63),
    width: '100%',
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(20),
    bottom: 0,
    position: 'absolute',
  },
  positionText: {
    color: colors.white,
    fontSize: fs(16),
    fontWeight: '700',
  },
});

export default AddToCartButton;
