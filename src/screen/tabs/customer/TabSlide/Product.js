import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FilterView from '../../../../components/common/Filter';
import AddToCartButton from '../../../../components/AddToCartButton';
import ProductButtonList from '../../../../components/ProductButtonList';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import ProductItemList from '../../../../components/ProductItemList';
import {ProductList} from '../../../../helper/dummyData';

const Product = () => {
  return (
    <View style={styles.container}>
      <ProductButtonList />
      <FilterView />
      <ProductItemList DATA={ProductList} />
      <AddToCartButton title={'Add To Cart'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Product;
