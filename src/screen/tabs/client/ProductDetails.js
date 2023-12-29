import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import ClientHeader from '../../../components/common/ClientHeader';
import {commonStyles} from '../../../helper/commonStyle';
import {fs, hp, wp} from '../../../helper/helper';
import {icons} from '../../../helper/imageConstans';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import ImageList from '../../../components/ImageList';
import {ProductList} from '../../../helper/dummyData';
import ClientTextInput from '../../../components/common/ClientTextInput';
import HeaderText from '../../../components/common/HeaderText';
import CountButton from '../../../components/common/CountButton';
import OfferButton from '../../../components/OfferButton';
import CheckBoxButton from '../../../components/common/CheckBox';
const ProductDetails = ({navigation}) => {
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
      <ScrollView>
        <View style={styles.mainView}>
          <HeaderText title={'Add Product image '} />
          <Image style={styles.mainViewImage} source={icons.redStar} />
        </View>
        <ClientTextInput placeholder={'Kerastase.jpeg'} />
        <HeaderText title={'Categories Name'} marginTop={30} />
        <ClientTextInput placeholder={'Oil Mask'} />

        <TouchableOpacity style={styles.text1View}>
          <Text style={styles.text1}>{'+ Add More Images'}</Text>
        </TouchableOpacity>
        <ImageList DATA={ProductList} horizontal={true} />
        <HeaderText title={'Product in Stock'} marginTop={30} />
        <View style={styles.textInputView}>
          <TextInput style={styles.textInput} />
          <CountButton />
        </View>
        <View style={styles.CheckBoxView}>
          <CheckBoxButton />
          <Text style={[commonStyles.CommonText, {marginLeft: wp(12)}]}>
            {'Out of stock'}
          </Text>
        </View>
        <HeaderText title={'Features'} marginTop={30} />
        <TextInput style={styles.input} multiline={true} />
        <HeaderText title={'Specification'} marginTop={30} />
        <TextInput style={[styles.input]} multiline={true} />
        <HeaderText title={'Video'} marginTop={30} />
        <ClientTextInput placeholder={'Kerastase Product video.mp4'} />
        <OfferButton title={'Save'} height={hp(43)} />
        <OfferButton title={'Delete'} height={hp(43)} />
        <View style={{height: hp(50)}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainView: {
    flexDirection: 'row',
    marginTop: hp(20),
    alignItems: 'center',
  },
  mainViewImage: {
    height: hp(12),
    width: wp(12),
    marginLeft: wp(9),
  },
  text1: {
    fontSize: fs(10),
    fontWeight: '400',
    color: '#000',
  },
  text1View: {
    marginHorizontal: wp(8),
    alignSelf: 'flex-end',
  },
  textInputView: {
    marginHorizontal: wp(16),
    marginTop: hp(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    height: hp(31),
    width: wp(242),
    borderWidth: 1,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: hp(157),
    marginHorizontal: wp(16),
    marginTop: hp(12),
  },
  CheckBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(20),
    marginLeft: wp(16),
  },
});

export default ProductDetails;
