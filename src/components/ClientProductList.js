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

const Item = ({item, onPress}) => {
  return (
    <View style={styles.list}>
      <View>
        <Image style={styles.imageView} source={item?.image} />
      </View>
      <View style={{width: wp(166), marginLeft: wp(10)}}>
        <Text style={styles?.titleText}>{item?.title}</Text>
        <View style={{flexDirection: 'row', marginTop: hp(6)}}>
          <Text style={[styles.titleText, {fontWeight: '600'}]}>
            {'Left : '} <Text>{item?.quantity}</Text>
          </Text>
          <Text style={styles.priceText}>
            {item?.Currency}
            <Text>{item?.price}</Text>
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => onPress(item)}>
          <Image style={styles.editImage} source={icons.edit} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ClientProductList = ({DATA, onPress}) => {
  const [data, setData] = useState(DATA);
  // ClientProductListData
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
    height: hp(85),
    marginVertical: hp(17),
    marginHorizontal: wp(15),
    justifyContent: 'space-between',
  },
  imageView: {
    height: hp(80),
    width: wp(90),
    borderRadius: 5,
  },
  priceText: {
    fontSize: fs(14),
    fontWeight: '500',
    color: colors.pink,
    marginLeft: wp(12),
  },
  titleText: {
    fontSize: fs(13),
    fontWeight: '400',
    color: colors.black,
    marginTop: hp(1),
  },
  text: {
    fontSize: fs(10),
    fontWeight: '400',
    color: colors.grey,
  },
  editImage: {
    height: hp(18),
    width: wp(18),
    marginRight: wp(8),
  },
});

export default ClientProductList;
