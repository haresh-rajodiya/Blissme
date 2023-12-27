import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import ClientHeader from '../../../components/common/ClientHeader';
import {commonStyles} from '../../../helper/commonStyle';
import {hp, wp} from '../../../helper/helper';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import {icons} from '../../../helper/imageConstans';
import Underline from '../../../components/common/Underline';
import ClientTextInput from '../../../components/common/ClientTextInput';
import CheckBoxButton from '../../../components/common/CheckBox';
import Button from '../../../components/common/Button';
import OfferButton from '../../../components/OfferButton';

const ServiceCategories = ({navigation}) => {
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
        title={'Services'}
        rightContainer={commonStyles.headerRightContainer}
        rightIcon={[
          commonStyles.headerRightContainer,
          {tintColor: colors.white},
        ]}
        rightImage={icons.add}
      />
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.mainView}>
            <Text style={[commonStyles.HeaderText, {marginLeft: wp(16)}]}>
              {'Main Categories Name'}
            </Text>
            <Image style={styles.mainViewImage} source={icons.redStar} />
          </View>
          <ClientTextInput />

          <Text
            style={[
              commonStyles.HeaderText,
              {marginTop: hp(28), marginLeft: wp(16)},
            ]}>
            {'Sub categories'}
          </Text>
          <ClientTextInput />

          <Text
            style={[
              commonStyles.HeaderText,
              {marginTop: hp(28), marginLeft: wp(16)},
            ]}>
            {'Service Time'}
          </Text>
          <ClientTextInput />

          <Text
            style={[
              commonStyles.HeaderText,
              {marginTop: hp(28), marginLeft: wp(16)},
            ]}>
            {'Cost'}
          </Text>
          <ClientTextInput placeholder={'Service cost'} />

          <ClientTextInput placeholder={'Platform cost'} />

          <Text
            style={[
              commonStyles.HeaderText,
              {marginTop: hp(28), marginLeft: wp(16)},
            ]}>
            {'Total'}
          </Text>
          <Text
            style={[
              commonStyles.HeaderText,
              {marginTop: hp(28), marginLeft: wp(16)},
            ]}>
            {'HK$ 588'}
          </Text>
          <View style={styles.CheckBoxView}>
            <CheckBoxButton />
            <Text style={[commonStyles.CommonText, {marginLeft: wp(12)}]}>
              {'I agree to the terms and conditions'}
            </Text>
          </View>
          <OfferButton title={'Save'} height={hp(43)} />
          <OfferButton title={'Delete'} height={hp(43)} />
          <View style={{height: hp(50)}}></View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  mainViewImage: {height: hp(12), width: wp(12), marginLeft: wp(9)},
  CheckBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(20),
    marginLeft: wp(16),
  },
});

export default ServiceCategories;
