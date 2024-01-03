import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonList from '../../../../components/common/ButtonList';
import FilterView from '../../../../components/common/Filter';
import ServiceDataList from '../../../../components/common/ServiceDataList';
import {fs, hp, wp} from '../../../../helper/helper';
import AddToCartButton from '../../../../components/AddToCartButton';

const Service = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ButtonList />
      <FilterView />
      <ServiceDataList />
      <AddToCartButton
        title={'Continue'}
        cart={() => navigation.navigate('Appointment')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonView: {
    width: '100%',
    height: hp(63),
    justifyContent: 'center',
  },
});

export default Service;
