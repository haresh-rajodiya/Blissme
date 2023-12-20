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
import {colors} from '../helper';
import {icons} from '../helper/imageConstans';
import {commonStyles} from '../helper/commonStyle';

const Item = ({item, onPress, ButtonPress}) => {
  return (
    <TouchableOpacity style={styles.list}>
      <View style={styles.imageView}>
        <Image style={styles.imageView} source={item?.image} />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: hp(10),
        }}>
        <View>
          <Text style={[commonStyles.CommonText, {fontWeight: '500'}]}>
            {item?.title}
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: hp(13),
              alignContent: 'center',
            }}>
            <Image style={styles.iconView} source={icons.locationDark} />
            <Text style={[commonStyles.CommonText]}>{item?.distance}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => ButtonPress()}>
          <Text style={styles.buttonText}>Book</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const NearByShop = ({DATA, onPress, ButtonPress}) => {
  const [data, setData] = useState(DATA);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Item item={item} onPress={onPress} ButtonPress={ButtonPress} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    height: hp(205),
    marginVertical: hp(24),
    marginHorizontal: wp(16),
  },
  imageView: {
    height: hp(131),
    width: '100%',
    borderRadius: 5,
  },
  salonName: {
    fontSize: fs(15),
    fontWeight: '500',
    color: colors.black,
    marginTop: hp(15),
  },

  iconView: {
    height: hp(16),
    width: wp(16),
    marginTop: hp(2),
  },
  buttonView: {
    height: hp(29),
    width: wp(82),
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: hp(10),
  },
  buttonText: {
    fontSize: fs(15),
    fontWeight: '700',
    color: colors?.white,
  },
});

export default NearByShop;
