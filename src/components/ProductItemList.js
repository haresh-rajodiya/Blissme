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
const Item = ({item, index}) => {
  let colors = ['#123456', '#654321', '#fdecba', '#abcdef'];
  return (
    <View style={[styles.list]}>
      <View>
        <Image style={styles.imageView} source={item?.image} />
      </View>
      <View style={{width: wp(166), marginLeft: wp(10)}}>
        <Text>{item?.title}</Text>
        <Text style={styles.priceText}>
          {item?.Currency}
          <Text>{item?.price}</Text>
        </Text>

        <Text style={styles.text}>{'inc. of all taxes'}</Text>
      </View>
      <View>
        {Item.qty == 0 ? null : (
          <TouchableOpacity style={[styles.buttonView]}>
            <Text style={styles.buttonText}>{'Add'}</Text>
          </TouchableOpacity>
        )}

        {Item.qty == 0 ? <CountButton /> : null}
      </View>
    </View>
  );
};

const ProductItemList = ({DATA}) => {
  const [data, setData] = useState(DATA);
  // let colors = ['#123456', '#654321', '#fdecba', '#abcdef'];
  return (
    <FlatList
      renderItem={({item}) => <Item item={item} />}
      data={data}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    height: hp(85),
    marginVertical: hp(17),
    marginHorizontal: wp(8),
    justifyContent: 'space-between',
  },
  imageView: {
    height: hp(83),
    width: wp(102),
    borderRadius: 5,
  },
  priceText: {
    fontSize: fs(14),
    fontWeight: '500',
    color: colors.black,
    marginTop: hp(15),
  },
  titleText: {
    fontSize: fs(12),
    fontWeight: '400',
    color: colors.black,
    marginTop: hp(1),
  },
  text: {
    fontSize: fs(10),
    fontWeight: '400',
    color: colors.grey,
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

export default ProductItemList;
