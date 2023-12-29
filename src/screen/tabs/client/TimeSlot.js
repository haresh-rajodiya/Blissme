//import liraries
import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import ClientHeader from '../../../components/common/ClientHeader';
import {commonStyles} from '../../../helper/commonStyle';
import {fs, hp, wp} from '../../../helper/helper';
import {icons} from '../../../helper/imageConstans';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import ClientTimeSlot from '../../../components/ClientTimeSlot';
import HeaderText from '../../../components/common/HeaderText';
import DeleteSlot from '../../../components/DeleteSlot';
import OfferButton from '../../../components/OfferButton';

const TimeSlotScreen = ({navigation}) => {
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
        title={'Time Slot'}
        rightContainer={commonStyles.headerRightContainer}
        rightIcon={[
          commonStyles.headerRightContainer,
          {tintColor: colors.white},
        ]}
        rightImage={icons.add}
        onPress={() => navigation.navigate('AddTimeSlot')}
      />
      <ScrollView>
        <HeaderText
          title={'Monday'}
          text={'Edit'}
          marginTop={hp(35)}
          onPress={() => navigation.navigate('AddTimeSlot')}
        />
        <ClientTimeSlot />
        <DeleteSlot marginTop={hp(25)} />

        <HeaderText
          title={'Tuesday'}
          text={'Edit'}
          marginTop={hp(35)}
          onPress={() => navigation.navigate('AddTimeSlot')}
        />
        <ClientTimeSlot />
        <DeleteSlot marginTop={hp(25)} />
        <HeaderText
          title={'Wednesday'}
          text={'Edit'}
          marginTop={hp(35)}
          onPress={() => navigation.navigate('AddTimeSlot')}
        />
        <ClientTimeSlot />
        <DeleteSlot marginTop={hp(25)} />
        <HeaderText
          title={'Thursday'}
          text={'Edit'}
          marginTop={hp(35)}
          onPress={() => navigation.navigate('AddTimeSlot')}
        />
        <ClientTimeSlot />
        <DeleteSlot marginTop={hp(25)} />
        <HeaderText
          title={'Friday'}
          text={'Edit'}
          marginTop={hp(35)}
          onPress={() => navigation.navigate('AddTimeSlot')}
        />
        <ClientTimeSlot />
        <DeleteSlot marginTop={hp(25)} />
        <HeaderText
          title={'Saturday'}
          text={'Edit'}
          marginTop={hp(35)}
          onPress={() => navigation.navigate('AddTimeSlot')}
        />
        <ClientTimeSlot />
        <DeleteSlot marginTop={hp(25)} />
        <HeaderText
          title={'Sunday'}
          text={'Edit'}
          marginTop={hp(35)}
          onPress={() => navigation.navigate('AddTimeSlot')}
        />
        <ClientTimeSlot />
        <DeleteSlot marginTop={hp(25)} />
        <OfferButton title={'Save'} height={hp(43)} />
        <View style={{height: hp(20)}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default TimeSlotScreen;
