import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {fs, hp, wp} from '../helper/helper';
import {appointmentTime} from '../helper/dummyData';
import {commonStyles} from '../helper/commonStyle';
import {colors} from '../helper';

const Item = ({item}) => {
  return (
    <TouchableOpacity style={styles.TouchableView}>
      <Text style={[commonStyles.CommonText, {color: '#666'}]}>
        {item.time}
      </Text>
    </TouchableOpacity>
  );
};

const AppointmentTime = () => {
  const [data, setData] = useState(appointmentTime);
  // TimeSlotData
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
