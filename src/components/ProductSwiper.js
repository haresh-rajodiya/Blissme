import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {ProductSwiperData, swiperData} from '../helper/dummyData';
import {fs, hp, wp} from '../helper/helper';
import {colors} from '../helper';

const ProductSwiper = () => {
  const [data, setData] = useState(ProductSwiperData);
  const renderItem = ({item}) => {
    return (
      <View style={styles.imageViewStyle}>
        <ImageBackground
          style={styles.imageBackgroundStyle}
          source={item['image']}>
          <View>
            <Text style={styles.title}>
              {item.title}
              <Text style={styles.offer}>{item.title1}</Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        layout={'default'}
        data={data}
        sliderWidth={0}
        itemWidth={395}
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
    alignSelf: 'center',
    height: hp(200),
  },
  title: {
    fontSize: fs(20),
    fontWeight: '500',
    color: colors.white,
  },
  offer: {
    fontSize: fs(20),
    fontWeight: '500',
    color: colors.pink,
  },
  imageBackgroundStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imageViewStyle: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductSwiper;
