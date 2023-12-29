import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import ClientHeader from '../../../components/common/ClientHeader';
import {commonStyles} from '../../../helper/commonStyle';
import {fs, hp, wp} from '../../../helper/helper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {icons} from '../../../helper/imageConstans';
import HeaderText from '../../../components/common/HeaderText';
import ClientTimeSlot from '../../../components/ClientTimeSlot';
import DeleteSlot from '../../../components/DeleteSlot';
import OfferButton from '../../../components/OfferButton';
import SlotTimingDropDown from '../../../components/SlotTimingDropDown';
import CommonInput from '../../../components/common/CommonInput';
import {colors} from '../../../helper';
import SelectHoliday from '../../../components/SelectHoliday';

const AddTimeSlot = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ClientHeader
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[
          commonStyles.headerRightContainer,
          {height: hp(19), tintColor: Colors.white},
        ]}
        addImage={icons.backArrow}
        drawer={() => navigation.goBack()}
        title={'Time Slot'}
        rightContainer={commonStyles.headerRightContainer}
        rightIcon={[
          commonStyles.headerRightContainer,
          {tintColor: Colors.white},
        ]}
        rightImage={icons.add}
      />
      <View style={styles.mainView}>
        <View>
          <Text style={styles.text}>{'Date'}</Text>
          <CommonInput Data={'Monday'} />
        </View>
        <View>
          <Text style={styles.text}>{'Slot Timing'}</Text>
          <SlotTimingDropDown />
        </View>
      </View>
      <View style={[styles.mainView, {marginTop: hp(16)}]}>
        <View>
          <Text style={styles.text}>{'Time'}</Text>
          <CommonInput Data={'8:00 AM - 6:00 PM'} />
        </View>
        <View>
          <Text style={styles.text}>{'Holiday'}</Text>
          <SelectHoliday />
        </View>
      </View>
      <HeaderText
        title={'Monday'}
        text={'Edit'}
        marginTop={hp(35)}
        onPress={() => navigation.navigate('AddTimeSlot')}
      />
      <ClientTimeSlot />
      <DeleteSlot marginTop={hp(25)} />
      <OfferButton title={'Save'} height={hp(43)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mainView: {
    flexDirection: 'row',
    marginHorizontal: wp(16),
    justifyContent: 'space-between',
    marginTop: hp(54),
  },
  text: {
    fontSize: fs(16),
    fontWeight: '400',
    color: colors.black,
  },
});

export default AddTimeSlot;
