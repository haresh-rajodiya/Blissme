import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from 'react-native';
import ClientHeader from '../../../components/common/ClientHeader';
import {commonStyles} from '../../../helper/commonStyle';
import {hp, wp} from '../../../helper/helper';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import {icons} from '../../../helper/imageConstans';
import ClientTextInput from '../../../components/common/ClientTextInput';
import CheckBoxButton from '../../../components/common/CheckBox';
import OfferButton from '../../../components/OfferButton';

const AddStylist = ({navigation}) => {
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
        title={'Stylist'}
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
              {'Add Stylist images '}
            </Text>
            <Image style={styles.mainViewImage} source={icons.redStar} />
          </View>
          <ClientTextInput placeholder={'avatar illustration.jpeg'} />
          <Text
            style={[
              commonStyles.HeaderText,
              {marginTop: hp(28), marginLeft: wp(16)},
            ]}>
            {'Stylist name'}
          </Text>
          <ClientTextInput placeholder={'Sandy'} />
          <Text
            style={[
              commonStyles.HeaderText,
              {marginTop: hp(28), marginLeft: wp(16)},
            ]}>
            {'Services '}
          </Text>
          <ClientTextInput
            placeholder={'Hair stylist, massage, hair coloring'}
          />
          <Text
            style={[
              commonStyles.HeaderText,
              {marginTop: hp(28), marginLeft: wp(16)},
            ]}>
            {'Location '}
          </Text>
          <ClientTextInput placeholder={'Man mo temple'} />
          <Text
            style={[
              commonStyles.HeaderText,
              {marginTop: hp(28), marginLeft: wp(16)},
            ]}>
            {'Contact '}
          </Text>
          <ClientTextInput placeholder={'+852-979-5557-9'} />
          <Text
            style={[
              commonStyles.HeaderText,
              {marginTop: hp(28), marginLeft: wp(16)},
            ]}>
            {'Alternative Contact '}
          </Text>
          <ClientTextInput placeholder={'+852-979-5557-7'} />
          <View style={styles.CheckBoxView}>
            <CheckBoxButton />
            <Text style={[commonStyles.CommonText, {marginLeft: wp(12)}]}>
              {'I agree to the terms and conditions'}
            </Text>
          </View>
          <OfferButton title={'Save'} height={hp(43)} />
          <OfferButton title={'Delete'} height={hp(43)} />
          <View style={{height: hp(100)}}></View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

export default AddStylist;
