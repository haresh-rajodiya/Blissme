import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Logo from '../../../components/Logo';
import {hp} from '../../../helper/helper';
import Button from '../../../components/common/Button';
import {commonStyles} from '../../../helper/commonStyle';
import {colors} from 'react-native-swiper-flatlist/src/themes';

const SelectCategory = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo style={hp(150)} />
      <Text style={[commonStyles.HeaderText, {marginTop: hp(60)}]}>
        choose your category
      </Text>
      <Button
        onPress={() => navigation.navigate('ClientHome')}
        title={'Seller'}
        style={hp(20)}
        color={'#000'}
      />
      <Button
        onPress={() => navigation.navigate('OnBoarding')}
        title={'Customer'}
        style={hp(30)}
        color={'#000'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default SelectCategory;
