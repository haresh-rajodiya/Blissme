import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {fs, hp, wp} from '../helper/helper';
import {colors} from '../helper';

const handleImagePicker = () => {
  ImagePicker.openPicker({
    width: hp(50),
    height: hp(50),
    cropping: true,
  })
    .then(image => {
      setSelectedImage(image.path);
      setHeight(hp(60));
      setWidth(wp(60));
      console.log(image);
    })
    .catch(error => {
      console.log(error);
    });
};

const Item = ({item}) => {
  return (
    <View style={styles.list}>
      <TouchableOpacity
        style={{
          height: hp(118),
          width: wp(75),
          borderWidth: 1,
          borderColor: '#000',
        }}
        onPress={handleImagePicker}>
        <Image style={styles.imageView} onPress={handleImagePicker} />
      </TouchableOpacity>
    </View>
  );
};

const ImageList = ({DATA, horizontal, numColumns}) => {
  const [data, setData] = useState(DATA);
  // DATA={ProductList}
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
        horizontal={horizontal}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginVertical: hp(17),
    marginHorizontal: wp(5.5),
  },
  imageView: {
    height: hp(75),
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
  container: {
    alignItems: 'center',
    marginHorizontal: wp(8),
  },
});

export default ImageList;
