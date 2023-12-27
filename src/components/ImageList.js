import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {hp, wp} from '../helper/helper';
import {icons} from '../helper/imageConstans';

const handleImagePicker = () => {
  ImagePicker.openPicker({
    width,
    height,
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

const handleCameraPicker = () => {
  ImagePicker.openCamera({
    width,
    height,
    cropping: true,
  })
    .then(image => {
      setSelectedImage(image.path);
      setHeight(hp(60));
      setWidth(wp(60));
    })
    .catch(error => {
      console.log(error);
    });
};

const Item = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        marginRight: wp(29),
      }}>
      <ImageBackground style={styles.imageView} source={item['image']} />
      <View style={styles.ratingView}>
        <Image style={styles.ratingImage} source={icons.star} />
        <Text style={styles.textList}>{item.rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ImageList = () => {
  const [data, setData] = useState(StylistsData);
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.touchableImageView}
        onPress={handleImagePicker}>
        <Image
          source={{uri: selectedImage}}
          style={{width: width, height: height, borderRadius: 50}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cameraView} onPress={handleCameraPicker}>
        <Image source={icons.camera} style={{height: hp(12), width: wp(12)}} />
      </TouchableOpacity> */}
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  cameraView: {
    height: hp(20),
    width: wp(20),
    borderRadius: 50,
    backgroundColor: colors.pink,
    marginTop: hp(25),
    marginLeft: wp(-12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableImageView: {
    height: hp(60),
    width: wp(60),
    borderRadius: 50,
    marginLeft: wp(12),
    borderWidth: 1,
  },
});

export default ImageList;
