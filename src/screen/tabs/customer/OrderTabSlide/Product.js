import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OrderProduct = () => {
  return (
    <View style={styles.container}>
      <Text>OrderProduct</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OrderProduct;
