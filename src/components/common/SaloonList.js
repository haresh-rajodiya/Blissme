import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {fs, hp, wp} from '../../helper/helper';
import {SaloonList} from '../../helper/dummyData';

const SaloonDetailList = () => {
  const [data, setData] = useState(SaloonList);
  const renderItem = ({item, index}) => {
    return (
      <View>
        <ImageBackground style={styles.imageView} source={item['image']} />
        <Text style={styles.textList}>{item.title}</Text>
        <Text style={[styles.textList, {fontSize: fs(12)}]}>{item.text}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        layout={'default'}
        data={data}
        sliderWidth={0}
        itemWidth={wp(188)}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: hp(26),
    width: wp(360),
    height: hp(205),
  },
  textList: {
    fontSize: fs(15),
    fontWeight: '500',
    margin: hp(12),
    color: 'black',
  },
  imageView: {
    height: hp(131),
    width: wp(188),
  },
});

export default SaloonDetailList;
