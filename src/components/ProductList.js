import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {fs, hp, wp} from '../helper/helper';
import {ProductData} from '../helper/dummyData';

const ProductList = () => {
  const [data, setData] = useState(ProductData);
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          borderRadius: 5,
          //   justifyContent: 'center',
          //   alignItems: 'center',
        }}>
        <ImageBackground
          style={{
            height: hp(131),
            width: wp(188),
            backgroundColor: 'red',
          }}
          source={item['image']}>
          {/* <Text style={{fontSize: 15, fontWeight: '500'}}>{item.title}</Text>
          <Text>{item.text}</Text> */}
        </ImageBackground>
        <Text style={styles.textList}>{item.title}</Text>
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
    // alignSelf: 'center',
    height: hp(205),
  },
  textList: {
    fontSize: fs(15),
    fontWeight: '500',
    margin: hp(12),
    color: 'black',
  },
});

export default ProductList;
