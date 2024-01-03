import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../../components/Logo';
import {hp, wp} from '../../../helper/helper';
import {commonStyles} from '../../../helper/commonStyle';
import PrimaryTextInput from '../../../components/common/PrimaryTextInput';
import Button from '../../../components/common/Button';
import Header from '../../../components/Header';
import {icons} from '../../../helper/imageConstans';
import {colors} from '../../../helper';

const Verification = ({navigation}) => {
  const {navigate, goBack} = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={styles.headerLeftContainer}
        leftIcon={styles.headerLeftContainer}
        addImage={icons.back}
        drawer={() => navigation.goBack()}
      />
      <Logo style={hp(86)} />
      <Text
        style={[
          commonStyles.HeaderText,
          {marginTop: hp(34), textAlign: 'center'},
        ]}>
        OTP Verification
      </Text>
      <Text
        style={[
          commonStyles.CommonText,
          {marginTop: hp(9), textAlign: 'center'},
        ]}>
        Your Otp Verification code send to your
      </Text>
      <Text
        style={[
          commonStyles.CommonText,
          {marginTop: hp(0), textAlign: 'center'},
        ]}>
        Mobile Number
      </Text>
      <PrimaryTextInput style={hp(29)} />
      <Button
        // onPress={() => submitotp()}
        onPress={() => navigation.navigate('SelectCategory')}
        title={'Verify'}
        style={hp(44)}
        color={colors.black}
      />
      <View
        style={{
          marginTop: hp(22),
          alignItems: 'center',
        }}>
        <Text style={[commonStyles.commonText, styles.signuptext]}>
          Didn't receive the code
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={[commonStyles.CommonText, {color: '#F93A8B'}]}>
              {' '}
              {' Resend'}
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
      {/* <Text style={[styles.signuptext]}>
        {' '}
        Didn't receive the code
        <Text> {' Resend'}</Text>
      </Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: hp(16),
  },
  signuptext: {
    // marginTop: hp(22),
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 15,
  },
  headerLeftContainer: {
    height: hp(14),
    width: wp(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Verification;
