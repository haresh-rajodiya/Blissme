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
import {fs, hp, wp} from '../../../helper/helper';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import {icons} from '../../../helper/imageConstans';
import ClientTextInput from '../../../components/common/ClientTextInput';
import CheckBoxButton from '../../../components/common/CheckBox';
import OfferButton from '../../../components/OfferButton';
import HeaderText from '../../../components/common/HeaderText';

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
        <View style={styles.mainView}>
          <HeaderText title={'Add Stylist images '} />
          <Image style={styles.mainViewImage} source={icons.redStar} />
        </View>
        <ClientTextInput placeholder={'avatar illustration.jpeg'} />
        <HeaderText title={'Stylist name'} marginTop={22} />

        <ClientTextInput placeholder={'Sandy'} />

        <HeaderText title={'Services'} marginTop={22} />
        <ClientTextInput placeholder={'Hair stylist, massage, hair coloring'} />
        <HeaderText title={'Location'} marginTop={22} />
        <ClientTextInput placeholder={'Man mo temple'} />
        <HeaderText title={'Contact'} marginTop={22} />
        <ClientTextInput placeholder={'+852-979-5557-9'} />

        <HeaderText title={'Alternative Contact'} marginTop={22} />
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
  CommonText: {
    fontSize: fs(15),
    fontWeight: '400',
    color: colors?.black,
  },
});

export default AddStylist;
