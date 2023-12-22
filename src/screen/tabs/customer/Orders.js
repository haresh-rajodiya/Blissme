import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {colors} from '../../../helper/colors';
import Header from '../../../components/Header';
import {commonStyles} from '../../../helper/commonStyle';
import {icons} from '../../../helper/imageConstans';
import {hp, wp} from '../../../helper/helper';
import OrderTabBar from '../../../components/OrderTabbar';

const Orders = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[commonStyles.headerRightContainer, {height: hp(19)}]}
        addImage={icons.drawer}
        drawer={() => navigation.openDrawer()}
        title={'My Order'}
        rightContainer={commonStyles.headerRightContainer}
        rightIcon={commonStyles.headerRightContainer}
        rightImage={icons.search}
      />
      <OrderTabBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Orders;
