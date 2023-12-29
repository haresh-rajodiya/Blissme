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
import ClientTextInput from '../../../components/common/ClientTextInput';
import CheckBoxButton from '../../../components/common/CheckBox';
import OfferButton from '../../../components/OfferButton';
import HeaderText from '../../../components/common/HeaderText';

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
            <HeaderText title={'Main Categories Name'} />

            <Image style={styles.mainViewImage} source={icons.redStar} />
          </View>
          <ClientTextInput />
          <HeaderText title={'Sub categories'} marginTop={25} />

          <ClientTextInput />
          <HeaderText title={'Service Time'} marginTop={25} />

          <ClientTextInput />

          <HeaderText title={'Cost'} marginTop={25} />
          <ClientTextInput placeholder={'Service cost'} />

          <ClientTextInput placeholder={'Platform cost'} />

          <HeaderText title={'Total'} marginTop={25} />
          <HeaderText title={'HK$ 588'} marginTop={25} />
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
//<HeaderText title={'Contact'} marginTop={22} />
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
