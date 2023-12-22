import React, {useState} from 'react';
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

const Item = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.list} onPress={onPress}>
        <View>
          <Image style={styles.imageView} source={item?.image} />
        </View>
        <View style={{marginLeft: wp(19), width: '65%'}}>
          <Text style={commonStyles.HeaderText}>{item?.title}</Text>
          <View style={{flexDirection: 'row', marginTop: hp(3)}}>
            <Text style={commonStyles.CommonText}>
              {'Quantity :  '}{' '}
              <Text style={commonStyles.CommonText}>{item?.quantity}</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp(8),
            }}>
            <Image
              style={{height: hp(14), width: wp(15), marginTop: hp(3)}}
              source={icons.toDay}
            />
            <Text>{'Ordered on '}</Text>
            <Text>{item?.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          height: hp(1),
          marginTop: hp(5),
          backgroundColor: '#EEE',
        }}></View>
      <TouchableOpacity style={styles.deleteView}>
        <Image
          style={{height: hp(24), width: wp(24)}}
          source={icons.deleteRed}
        />
        <Text style={{fontSize: fs(11), color: '#DE0606'}}>
          {'Cancel Booking'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const OrderProductItem = ({DATA, onPress}) => {
  const [data, setData] = useState(DATA);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} onPress={onPress} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    //height: hp(200),
    marginVertical: hp(24),
    marginHorizontal: wp(8),
    // justifyContent: 'space-between',
  },
  imageView: {
    height: hp(95),
    width: wp(96),
    borderRadius: 5,
  },
  deleteView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(56),
    alignSelf: 'center',
  },
  container: {
    marginHorizontal: hp(4),
    elevation: 5,
    shadowColor: '#000',
    marginTop: hp(12),
  },
});

export default OrderProductItem;
