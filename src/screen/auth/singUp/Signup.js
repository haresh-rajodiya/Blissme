import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {colors} from '../../../helper/colors';
import Header from '../../../components/Header';
import {commonStyles} from '../../../helper/commonStyle';
import PrimaryTextInput from '../../../components/common/PrimaryTextInput';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../../helper/helper';
import Button from '../../../components/common/Button';
import {icons} from '../../../helper/imageConstans';

const Signup = ({navigation}) => {
  //   const navigation = useNavigation();
  const {navigate, goBack} = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={styles.headerLeftContainer}
        leftIcon={styles.headerLeftContainer}
        addImage={icons.back}
        title={'Create new Account'}
        // onPress={() => goBack()}
        drawer={() => navigation.goBack()}
      />
      <Text style={[commonStyles.CommonText, {marginTop: hp(30)}]}>Name</Text>
      <PrimaryTextInput />
      <Text style={[commonStyles.CommonText, {marginTop: hp(30)}]}>
        Email id
      </Text>
      <PrimaryTextInput />
      <Text style={[commonStyles.CommonText, {marginTop: hp(30)}]}>
        Phone Number
      </Text>
      <PrimaryTextInput />
      <Button
        title={'Create New Account'}
        color={colors.black}
        onPress={() => navigation.navigate('Verification')}
      />

      <Text style={[styles.signuptext]}>
        Already have an Account ?
        <TouchableOpacity onPress={() => navigate('LoginScreen')}>
          <Text style={{color: '#F93A8B'}}>{' Login'}</Text>
        </TouchableOpacity>
      </Text>
      <Text style={[styles.instructionText]}>
        By clicking create new account you agree to the
      </Text>
      <Text style={[styles.instructionText, {marginTop: hp(0)}]}>
        following Terms & Condition
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: hp(16),
  },
  signuptext: {
    marginTop: hp(65),
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 15,
  },
  instructionText: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.black,
    textAlign: 'center',
    marginTop: hp(156),
  },
  headerLeftContainer: {
    height: hp(14),
    width: wp(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Signup;
