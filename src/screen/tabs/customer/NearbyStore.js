import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../../../helper/colors';
import Header from '../../../components/Header';
import {hp, wp} from '../../../helper/helper';
import {icons} from '../../../helper/imageConstans';
import {commonStyles} from '../../../helper/commonStyle';
import NearByShop from '../../../components/NearByShop';
import {TopSalonList} from '../../../helper/dummyData';

const NearbyStore = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[commonStyles.headerRightContainer, {height: hp(19)}]}
        addImage={icons.drawer}
        drawer={() => navigation.openDrawer()}
        title={'Near by you'}
        rightContainer={commonStyles.headerRightContainer}
        rightIcon={commonStyles.headerRightContainer}
        rightImage={icons.search}
      />
      <View style={styles.locationView}>
        <TouchableOpacity style={styles.headerRightContainer}>
          <Image
            style={[commonStyles.headerRightContainer]}
            source={icons.location}
          />
        </TouchableOpacity>
        <Text style={[commonStyles.HeaderText, {marginLeft: wp(20)}]}>
          Mong Kok Flower Market
        </Text>
      </View>
      <NearByShop DATA={TopSalonList} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  locationView: {
    paddingHorizontal: hp(16),
    flexDirection: 'row',
    marginTop: hp(20),
  },
});

export default NearbyStore;
