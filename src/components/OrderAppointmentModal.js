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
import {colors} from '../helper';

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
            <Image
              style={{height: hp(14), width: wp(15)}}
              source={icons.star}
            />
            <Text style={commonStyles.CommonText}>{item?.rating}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp(8),
              // alignItems: 'center',
            }}>
            <Image
              style={{height: hp(14), width: wp(15), marginTop: hp(3)}}
              source={icons.toDay}
            />
            <Text>{item?.time}</Text>
          </View>
          <Text style={{marginTop: hp(4)}}>{item?.stylist}</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          height: hp(1),
          marginTop: hp(5),
          backgroundColor: '#EEE',
        }}></View>
      <TouchableOpacity>
        <Text style={[commonStyles.HeaderText, {marginTop: hp(10)}]}>
          {'Price Details'}
        </Text>
        <View style={[styles.textView]}>
          <Text style={styles.text}>{'Skin Radiance Facial'}</Text>
          <Text style={styles.text1}>{'HK$ 588'}</Text>
        </View>
        <View style={[styles.textView]}>
          <Text style={[styles.text, {width: wp(214)}]}>
            {
              'Oily, Combination, Sensitive or Acne Prone skin Ainhoa Vitaminal Facial'
            }
          </Text>
          <Text style={styles.text1}>{'HK$ 888'}</Text>
        </View>
        <View style={[styles.textView]}>
          <Text style={styles.text}>{'Total '}</Text>
          <Text style={styles.text1}>{'HK$ 1,492'}</Text>
        </View>
        <View style={[styles.textView]}>
          <Text style={styles.text}>{'Paid on '}</Text>
          <Text style={styles.text1}>{'Paypal'}</Text>
        </View>
        <View style={[styles.textView]}>
          <Text style={styles.text}>{'Order id'}</Text>
          <Text style={styles.text1}>{'#12345695238'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const OrderAppointmentModal = ({DATA, onPress}) => {
  const [data, setData] = useState(DATA);
  return (
    <View style={[styles.container, {elevation: 1}]}>
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
    marginVertical: hp(12),
  },
  imageView: {
    height: hp(95),
    width: wp(96),
    borderRadius: 5,
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(20),
  },
  container: {
    marginHorizontal: hp(4),
    shadowColor: '#000',
    marginTop: hp(12),
    height: hp(450),
    marginHorizontal: wp(8),
  },
  text: {
    fontSize: fs(14),
    fontWeight: '400',
    color: colors.black,
  },
  text1: {
    fontSize: fs(15),
    fontWeight: '500',
    color: colors.black,
  },
});

export default OrderAppointmentModal;
