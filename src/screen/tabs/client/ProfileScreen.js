import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import ClientHeader from '../../../components/common/ClientHeader';
import {commonStyles} from '../../../helper/commonStyle';
import {hp, wp} from '../../../helper/helper';
import {icons} from '../../../helper/imageConstans';
import {colors} from '../../../helper';
import HeaderText from '../../../components/common/HeaderText';
import ClientTextInput from '../../../components/common/ClientTextInput';
import TimeDropdown from '../../../components/common/TimeDropDown';
import CommonInput from '../../../components/common/CommonInput';
import OfferButton from '../../../components/OfferButton';

const ProfileScreen = ({navigation}) => {
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
        title={'Spa Profile'}
        rightContainer={commonStyles.headerRightContainer}
      />
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.mainView}>
            <HeaderText title={'Shop Name '} />
            <Image style={styles.mainViewImage} source={icons.redStar} />
          </View>
          <ClientTextInput placeholder={'Sandy Spa & Cool'} />
          <HeaderText title={'Shop Categories'} marginTop={hp(28)} />
          <ClientTextInput placeholder={''} />
          <HeaderText title={'Owner Name'} marginTop={hp(28)} />
          <ClientTextInput placeholder={'Sandy'} />
          <HeaderText title={'About The Shop'} marginTop={hp(28)} />
          <TextInput style={styles.input} multiline={true} />
          <HeaderText title={'Location'} marginTop={hp(28)} />
          <ClientTextInput
            placeholder={
              '2/F Stanley 11, No. 11 Stanley Street, Hong Kong China'
            }
            multiline={true}
          />
          <HeaderText title={'Contact Information'} marginTop={hp(28)} />
          <ClientTextInput
            placeholder={'+91 8870731344'}
            keyboardType={'number-pad'}
          />
          <ClientTextInput placeholder={'Website link'} />
          <HeaderText title={'Service on day’s'} marginTop={hp(28)} />
          <View style={styles.timeSlotView}>
            <CommonInput Data={'Monday'} />
            <TimeDropdown />
          </View>
          <View style={styles.timeSlotView}>
            <CommonInput Data={'Tuesday'} />
            <TimeDropdown />
          </View>
          <View style={styles.timeSlotView}>
            <CommonInput Data={'Wednesday'} />
            <TimeDropdown />
          </View>
          <View style={styles.timeSlotView}>
            <CommonInput Data={'Thursday'} />
            <TimeDropdown />
          </View>
          <View style={styles.timeSlotView}>
            <CommonInput Data={'Friday'} />
            <TimeDropdown />
          </View>
          <View style={styles.timeSlotView}>
            <CommonInput Data={'Saturday'} />
            <TimeDropdown />
          </View>
          <View style={styles.timeSlotView}>
            <CommonInput Data={'Sunday'} />
            <TimeDropdown />
          </View>
          <OfferButton title={'Save'} height={hp(43)} />
          <View style={{height: hp(100)}}></View>
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
  mainViewImage: {
    height: hp(12),
    width: wp(12),
    marginLeft: wp(9),
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: hp(144),
    marginHorizontal: wp(16),
    marginTop: hp(16),
  },
  timeSlotView: {
    flexDirection: 'row',
    marginHorizontal: wp(16),
    justifyContent: 'space-between',
    marginTop: hp(20),
  },
});

export default ProfileScreen;
