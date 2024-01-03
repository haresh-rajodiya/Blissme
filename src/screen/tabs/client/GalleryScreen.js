import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import ClientHeader from '../../../components/common/ClientHeader';
import {commonStyles} from '../../../helper/commonStyle';
import {fs, hp, wp} from '../../../helper/helper';
import {icons} from '../../../helper/imageConstans';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import OfferButton from '../../../components/OfferButton';
import ImageList from '../../../components/ImageList';
import {ProductList} from '../../../helper/dummyData';

const GalleryScreen = ({navigation}) => {
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
        title={'Spa gallery'}
        rightContainer={commonStyles.headerRightContainer}
      />
      <View style={styles.containerView}>
        <View style={styles.mainView}>
          <Text style={[styles.text]}>{'Spa Banner Images/Video '}</Text>
          <Image style={styles.mainViewImage} source={icons.redStar} />
        </View>
        <TouchableOpacity>
          <Text style={styles.text1}>{'+ Add More Images'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.text2]}>{'spa banner img.jpeg'}</Text>
      <TouchableOpacity style={styles.mainImageView}>
        <Image style={styles.image} source={icons.leSpaByJan} />
      </TouchableOpacity>
      <View style={[styles.mainView, {marginLeft: wp(16)}]}>
        <Text style={[styles.text]}>{'Add Gallery images '}</Text>
        <Image style={styles.mainViewImage} source={icons.redStar} />
      </View>
      <Text style={[styles.text2, {marginTop: hp(6)}]}>
        {'spa banner img.jpeg'}
      </Text>
      <TouchableOpacity
        style={{
          marginHorizontal: wp(16),
          alignItems: 'flex-end',
          alignSelf: 'flex-end',
        }}>
        <Text style={styles.text1}>{'+ Add More Images'}</Text>
      </TouchableOpacity>
      <ImageList DATA={ProductList} numColumns={4} />

      <OfferButton title={'Save'} height={hp(43)} />
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
  mainViewImage: {height: hp(12), width: wp(12), marginLeft: wp(9)},
  text: {
    fontSize: fs(16),
    fontWeight: '700',
    color: '#000',
  },
  text1: {
    marginTop: hp(20),
    fontSize: fs(10),
    fontWeight: '400',
    color: '#000',
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(16),
  },
  text2: {
    marginTop: hp(28),
    fontSize: fs(16),
    fontWeight: '400',
    marginLeft: wp(16),
    color: '#000',
  },
  image: {
    height: hp(111),
    width: '100%',
  },
  mainImageView: {
    marginTop: hp(20),
    alignItems: 'center',
    marginHorizontal: wp(16),
  },
});

export default GalleryScreen;
