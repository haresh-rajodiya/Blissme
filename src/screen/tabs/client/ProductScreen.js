import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import ClientHeader from '../../../components/common/ClientHeader';
import {commonStyles} from '../../../helper/commonStyle';
import {hp, wp} from '../../../helper/helper';
import {icons} from '../../../helper/imageConstans';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import ClientProductCategories from '../../../components/ClientProductCategories';
import ClientProductList from '../../../components/ClientProductList';
import {ClientProductListData} from '../../../helper/dummyData';

const ProductScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ClientHeader
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[
          commonStyles.headerRightContainer,
          {height: hp(19), tintColor: colors.white},
        ]}
        addImage={icons.backArrow}
        drawer={() => navigation.goBack()}
        title={'Product'}
        rightContainer={commonStyles.headerRightContainer}
        rightIcon={[
          commonStyles.headerRightContainer,
          {tintColor: colors.white},
        ]}
        rightImage={icons.add}
      />
      <Text
        style={[
          commonStyles.HeaderText,
          {marginLeft: wp(16), marginTop: hp(23)},
        ]}>
        {'Main Categories'}
      </Text>
      <ClientProductCategories />
      <Text
        style={[
          commonStyles.HeaderText,
          {marginLeft: wp(16), marginTop: hp(33)},
        ]}>
        {'Products'}
      </Text>
      <ScrollView style={{height: hp(120)}}>
        <ClientProductList
          DATA={ClientProductListData}
          // onPress={item => navigation.navigate(item?.navigateBy)}
          onPress={item => navigation.navigate(item?.navigateBy)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default ProductScreen;
