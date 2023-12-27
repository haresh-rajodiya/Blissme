import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {fs, hp, wp} from '../helper/helper';
import {icons} from '../helper/imageConstans';
import {commonStyles} from '../helper/commonStyle';

const Item = ({item}) => {
  return (
    <TouchableOpacity style={styles.list}>
      <View>
        <Image style={styles.imageView} source={item?.image} />
      </View>
      <View style={{width: wp(200)}}>
        <Text style={commonStyles.HeaderText}>{item?.title}</Text>
        <View style={{flexDirection: 'row', marginTop: hp(6)}}>
          <Image style={{height: hp(14), width: wp(15)}} source={icons.star} />
          <Text style={commonStyles.CommonText}>{item?.rating}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(14),
            // alignItems: 'center',
          }}>
          <Image
            style={{height: hp(14), width: wp(15), marginTop: hp(3)}}
            source={icons.toDay}
          />
          <Text>{item?.time}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image style={{height: hp(20), width: wp(20)}} source={icons.delete} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const AppointmentCart = ({DATA}) => {
  const [data, setData] = useState(DATA);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    height: hp(85),
    marginVertical: hp(24),
    marginHorizontal: wp(8),
    justifyContent: 'space-between',
    elevation: 50,
    shadowColor: '#000',
  },
  imageView: {
    height: hp(95),
    width: wp(96),
    borderRadius: 5,
  },
});

export default AppointmentCart;
