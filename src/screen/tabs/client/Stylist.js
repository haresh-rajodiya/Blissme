import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {colors} from '../../../helper';
import ClientHeader from '../../../components/common/ClientHeader';
import {commonStyles} from '../../../helper/commonStyle';
import {hp} from '../../../helper/helper';
import {icons} from '../../../helper/imageConstans';
import StylistDetails from '../../../components/StylistDetails';

const Stylist = ({navigation}) => {
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
      <StylistDetails
        name={'Sam chan'}
        profession={'Hair stylist at Sandy Barber'}
        onPress={() => navigation.navigate('AddStylist')}
      />
      <StylistDetails
        name={'Zhen Mu'}
        profession={'Hair stylist at Sandy Barber'}
        onPress={() => navigation.navigate('AddStylist')}
      />
      <StylistDetails
        name={'Long Hai'}
        profession={'Hair stylist at Sandy Barber'}
        onPress={() => navigation.navigate('AddStylist')}
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

export default Stylist;
