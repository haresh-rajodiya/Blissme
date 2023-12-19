import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../helper/colors';

const NearbyStore = () => {
  return (
    <View style={styles.container}>
      <Text>Nearby</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.royalBlue,
  },
});

export default NearbyStore;
