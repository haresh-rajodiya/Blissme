//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import ClientHeader from '../../../components/common/ClientHeader';
import {commonStyles} from '../../../helper/commonStyle';
import {hp} from '../../../helper/helper';
import {icons} from '../../../helper/imageConstans';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import AppointmentTab from '../../../components/AppointmentTab';

// create a component
const AppointmentScreen = ({navigation}) => {
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
        title={'Appointment'}
        rightContainer={commonStyles.headerRightContainer}
      />
      <AppointmentTab />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

//make this component available to the app
export default AppointmentScreen;
