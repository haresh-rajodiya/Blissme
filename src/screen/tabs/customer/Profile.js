import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../helper/colors';
import Header from '../../../components/Header';
import {commonStyles} from '../../../helper/commonStyle';
import {hp, wp} from '../../../helper/helper';
import {icons} from '../../../helper/imageConstans';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[commonStyles.headerRightContainer, {height: hp(19)}]}
        addImage={icons.drawer}
        drawer={() => navigation.openDrawer()}
        title={'My Order'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Profile;
