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

const Item = ({item, onPress, ButtonPress}) => {
  return (
    <TouchableOpacity style={styles.list} onPress={() => onPress()}>
      <View style={styles.listView}>
        <Image style={styles.imageView} source={item?.image} />
      </View>
      <View style={{marginLeft: wp(11), flex: 1}}>
        <Text style={styles?.salonName}>{item?.title}</Text>
        <TouchableOpacity>
          <Text style={styles.timeText}>{item?.time}</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={{flexDirection: 'row', marginTop: hp(13)}}>
            <Image style={styles.iconView} source={icons.locationDark} />
            <Text>{item?.distance}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={() => ButtonPress()}>
            <Text style={styles.buttonText}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TopShopList = ({DATA, onPress, ButtonPress}) => {
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
    flexDirection: 'row',
    height: hp(101),
    marginVertical: hp(17),
    marginHorizontal: wp(16),
  },
  imageView: {
    height: hp(101),
    width: wp(143),
    borderRadius: 5,
  },
  salonName: {
    fontSize: fs(15),
    fontWeight: '500',
    color: colors.black,
    marginTop: hp(15),
  },
  timeText: {
    fontSize: fs(10),
    fontWeight: '400',
    color: '#00AA25',
    marginTop: hp(11),
  },
  iconView: {
    height: hp(16),
    width: wp(16),
  },
  buttonView: {
    height: hp(29),
    width: wp(82),
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: hp(7),
  },
  buttonText: {
    fontSize: fs(15),
    fontWeight: '700',
    color: colors?.white,
  },
});

export default TopShopList;
