import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import Header from '../../../components/Header';
import {icons} from '../../../helper/imageConstans';
import {hp, wp} from '../../../helper/helper';
import {commonStyles} from '../../../helper/commonStyle';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import TabBar from '../../../components/TabBar';

const SpaDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[commonStyles.headerRightIcon]}
        drawer={() => navigation.goBack()}
        addImage={icons.back}
        title={'Le Spa By Jan'}
      />
      <Image
        style={{height: hp(194), width: '100%', marginTop: hp(9)}}
        source={icons.LeSpa}
      />

      <TabBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default SpaDetails;
