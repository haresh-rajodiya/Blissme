import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {fs, hp, wp} from '../helper/helper';
import {TimeSlotData} from '../helper/dummyData';
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

const ClientTimeSlot = () => {
  const [data, setData] = useState(TimeSlotData);

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
    marginTop: hp(18),
    borderWidth: hp(0),
    marginHorizontal: wp(4),
    backgroundColor: colors.extraLightGrey,
  },
  container: {
    alignItems: 'center',
    marginTop: hp(0),
  },
});

export default ClientTimeSlot;
