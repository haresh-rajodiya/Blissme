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

const Item = ({item}) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity>
        <Image style={styles.imageView} source={item?.image} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.imageView} source={item?.image1} />
      </TouchableOpacity>
    </View>
  );
};

const GalleryDataList = ({DATA}) => {
  const [data, setData] = useState(DATA);
  return (
    <View style={{marginTop: hp(25)}}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    marginHorizontal: wp(17),
    justifyContent: 'center',
  },
  imageView: {
    height: hp(134),
    width: wp(180),
    margin: hp(2),
  },
});

export default GalleryDataList;
