import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../../../components/Header';
import {fs, hp, wp} from '../../../helper/helper';
import {icons} from '../../../helper/imageConstans';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import {commonStyles} from '../../../helper/commonStyle';
import Swiper from '../../../components/Swiper';
import ButtonList from '../../../components/common/ButtonList';
import FilterView from '../../../components/common/Filter';
import TopShopList from '../../../components/TopShopList';
import {TopSalonList} from '../../../helper/dummyData';

const TopSalon = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={[styles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[styles.headerRightContainer, {height: hp(19)}]}
        addImage={icons.drawer}
        drawer={() => navigation.opeanDrawer()}
        title={'Top Salon'}
        rightContainer={styles.headerRightContainer}
        rightIcon={styles.headerRightContainer}
        rightImage={icons.search}
      />
      <ScrollView>
        <View style={styles.locationView}>
          <TouchableOpacity style={styles.headerRightContainer}>
            <Image
              style={[styles.headerRightContainer]}
              source={icons.location}
            />
          </TouchableOpacity>
          <Text style={[commonStyles.HeaderText, {marginLeft: wp(20)}]}>
            Mong Kok Flower Market
          </Text>
        </View>
        <Swiper />
        <ButtonList onPress={item => navigation.navigate(item.navigateTo)} />

        <FilterView />
        <Text style={styles.salonHeader}>Top Salon</Text>
        <TopShopList
          DATA={TopSalonList}
          onPress={() => navigation.navigate('SpaDetails')}
          ButtonPress={() => navigation.navigate('Appointment')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerRightContainer: {
    height: hp(24),
    width: wp(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationView: {
    paddingHorizontal: hp(16),
    flexDirection: 'row',
    marginTop: hp(20),
  },
  salonHeader: {
    fontSize: fs(20),
    fontWeight: '500',
    color: '#000',
    marginLeft: wp(16),
  },
});

export default TopSalon;
