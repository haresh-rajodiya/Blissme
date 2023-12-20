import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../../../components/Header';
import {commonStyles} from '../../../helper/commonStyle';
import {icons} from '../../../helper/imageConstans';
import {hp, wp} from '../../../helper/helper';
import ProductSwiper from '../../../components/ProductSwiper';
import OurProductList from '../../../components/OurProduct';
import {OurProductListData} from '../../../helper/dummyData';
import AddToCartButton from '../../../components/AddToCartButton';

const OurProduct = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[commonStyles.headerRightContainer, {height: hp(19)}]}
        addImage={icons.drawer}
        drawer={() => navigation.openDrawer()}
        title={'Our Product'}
        rightContainer={commonStyles.headerRightContainer}
        rightIcon={commonStyles.headerRightContainer}
        rightImage={icons.search}
      />
      <ProductSwiper />
      <ScrollView>
        <OurProductList DATA={OurProductListData} />
        <View style={{height: hp(50)}}></View>
      </ScrollView>
      <AddToCartButton
        title={'Move to Cart'}
        value={'16'}
        text={'Total'}
        cart={() => navigation.navigate('Cart')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default OurProduct;
