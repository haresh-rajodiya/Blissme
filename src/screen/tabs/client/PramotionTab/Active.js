import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CouponDetails from '../../../../components/CoupenDetail';

const ActiveTab = () => {
  return (
    <View style={styles.container}>
      <CouponDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ActiveTab;
