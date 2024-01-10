import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {colors} from '../../../helper';
import {commonStyles} from '../../../helper/commonStyle';
import {hp, wp} from '../../../helper/helper';
import {icons} from '../../../helper/imageConstans';
import ClientHeader from '../../../components/common/ClientHeader';
import ClientCategories from '../../../components/ClientCategories';
import SubCategories from '../../../components/SubCategories';

const Services = ({navigation}) => {
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
      <Text
        style={[
          commonStyles.HeaderText,
          {marginTop: hp(23), marginLeft: wp(16)},
        ]}>
        {'Main Categories'}
      </Text>
      <ClientCategories />
      <Text
        style={[
          commonStyles.HeaderText,
          {marginTop: hp(36), marginLeft: wp(16)},
        ]}>
        {'Sub categories'}
      </Text>
      <SubCategories
        details={'Skin Radiance Facial'}
        amount={'500'}
        time={'min'}
        timeLoop={'60'}
        onPress={() => navigation.navigate('ServiceCategories')}
      />
      <SubCategories
        details={
          'Oily, Combination, Sensitive or Acne Prone skin Ainhoa Vitaminal Facial'
        }
        amount={'888'}
        time={'hr'}
        timeLoop={'1'}
      />
      <SubCategories
        details={'Neem & Tulsi Back Treatment'}
        amount={'10'}
        time={'min'}
        timeLoop={'10'}
      />
      <SubCategories
        details={'Lotus and Barley Back Treatment'}
        amount={'30'}
        time={'min'}
        timeLoop={'20'}
      />
      <SubCategories
        details={'Ainhoa Oxygen Facial'}
        amount={'58'}
        time={'min'}
        timeLoop={'18'}
      />
      <SubCategories
        details={'Tan removal – Brightening Facial'}
        amount={'80'}
        time={'min'}
        timeLoop={'60'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Services;
