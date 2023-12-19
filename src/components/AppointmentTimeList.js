import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {fs, hp, wp} from '../helper/helper';
import {appointmentTime} from '../helper/dummyData';
import {commonStyles} from '../helper/commonStyle';
import {colors} from '../helper';

const Item = ({item}) => {
  //   const [selected, setSelected] = useState('');
  return (
    <TouchableOpacity
      //   onDayPress={item => {
      //     setSelected(item.TouchableView);
      //   }}
      //   markedDates={{
      //     [selected]: {
      //       selected: true,
      //       disableTouchEvent: true,
      //     },
      //   }}
      //   theme={{
      //     backgroundColor: colors.white,
      //     calendarBackground: colors.white,
      //     textSectionTitleColor: '#b6c1cd',
      //     selectedDayBackgroundColor: colors.pink,
      //     selectedDayTextColor: colors.white,
      //     todayTextColor: colors.lightblue,
      //     dayTextColor: '#2d4150',
      //     //   textDisabledColor: colors.pink,
      //   }}
      style={styles.TouchableView}>
      <Text style={[commonStyles.CommonText, {color: '#666'}]}>
        {item.time}
      </Text>
    </TouchableOpacity>
  );
};

const AppointmentTime = () => {
  const [data, setData] = useState(appointmentTime);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
        numColumns={'4'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TouchableView: {
    borderBlockColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(30),
    minWidth: wp(85),
    borderRadius: 3,
    marginTop: hp(24),
    borderWidth: hp(0),
    marginHorizontal: wp(4),
  },
  container: {
    alignItems: 'center',
  },
});

export default AppointmentTime;
