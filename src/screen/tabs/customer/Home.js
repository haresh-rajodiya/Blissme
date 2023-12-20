import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {colors} from '../../../helper/colors';
import {icons} from '../../../helper/imageConstans';
import {hp, wp} from '../../../helper/helper';
import Header from '../../../components/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {commonStyles} from '../../../helper/commonStyle';
import Swiper from '../../../components/Swiper';
import WorkOrderHeader from '../../../components/WorkOrderHeader';
import {
  BrushBoule,
  FaceWash,
  Face,
  Leg,
  FaceGlow,
} from '../../../../assets/svg/svgImages/svgImage';
import OfferSwiper from '../../../components/OfferSwiper';
import SaloonDetailList from '../../../components/common/SaloonList';
import ProductList from '../../../components/ProductList';

const DATA = [
  {
    id: '0',
    title: 'Beauty',
    icon: <BrushBoule />,
    title1: '28 place',
  },
  {
    id: '1',
    title: 'Face Wash',
    icon: <FaceWash />,
    title1: '5 place',
    image: icons.relaxTreatment,
  },
  {
    id: '2',
    title: 'Face Massage',
    icon: <Face />,
    title1: '15 place',
  },
  {
    id: '3',
    title: 'Leg Massage',
    icon: <Leg />,
    title1: '20 place',
  },
  {
    id: '4',
    title: 'Face glow',
    icon: <FaceGlow />,
    title1: '25 place',
  },
];
const Item = ({item}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.TouchableIconView]}>
        <View style={[styles.IconView]}>{item?.icon}</View>
      </TouchableOpacity>
      <Text style={styles.listTextStyle}>{item?.title}</Text>
      <Text style={styles.listTextStyle1}>{item?.title1}</Text>
    </View>
  );
};

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header
          leftContainer={[styles.headerRightContainer, {height: hp(19)}]}
          leftIcon={[styles.headerRightContainer, {height: hp(19)}]}
          addImage={icons.drawer}
          drawer={() => navigation.openDrawer()}
          title={'Home'}
          rightContainer={styles.headerRightContainer}
          rightIcon={styles.headerRightContainer}
          rightImage={icons.search}
        />
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
        <WorkOrderHeader
          leftSideText={commonStyles.HeaderText}
          rightSideText={commonStyles.CommonText}
          title1={'Top Saloon'}
          title2={'View All'}
          onPress={() => navigation.navigate('TopSalon')}
        />
        <SaloonDetailList />
        <WorkOrderHeader
          leftSideText={commonStyles.HeaderText}
          rightSideText={commonStyles.CommonText}
          title1={'Top Services'}
          title2={'View All'}
        />
        <View style={{marginTop: hp(18)}}>
          <FlatList
            style={styles.listStyle}
            data={DATA}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
        <OfferSwiper />
        <TouchableOpacity
          style={{alignSelf: 'flex-start'}}
          onPress={() => navigation.navigate('OurProduct')}>
          <Text style={[commonStyles.HeaderText, {marginLeft: wp(17)}]}>
            our Product
          </Text>
        </TouchableOpacity>
        <ProductList />
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
  TouchableIconView: {
    borderBlockColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(62),
    width: wp(100),
    borderRadius: 3,
    marginTop: hp(31),
    borderWidth: hp(1),
    marginHorizontal: wp(5),
  },
  listTextStyle: {
    fontSize: hp(15),
    fontWeight: '700',
    marginTop: hp(8),
    color: colors.black,
    textAlign: 'center',
  },
  listTextStyle1: {
    fontSize: hp(10),
    fontWeight: '500',
    marginTop: hp(7),
    color: colors.black,
    textAlign: 'center',
  },
});

export default Home;
