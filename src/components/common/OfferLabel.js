import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fs} from '../../helper/helper';
import {colors} from '../../helper';

const OfferLabel = ({title, title1, offer}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{title}</Text>
        <Text>{offer}</Text>
      </View>
      <Text>{title1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  title: {
    fontSize: fs(20),
    fontWeight: '500',
    color: colors.white,
  },
  offer: {
    fontSize: fs(50),
    fontWeight: '900',
    color: colors.pink,
  },
});

export default OfferLabel;
