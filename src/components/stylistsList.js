import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {fs, hp, wp} from '../helper/helper';
import {StylistsData} from '../helper/dummyData';
import {icons} from '../helper/imageConstans';

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

const StylistsList = () => {
  const [data, setData] = useState(StylistsData);

  return (
    <View style={styles.container}>
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
    flexDirection: 'row',
    marginTop: hp(26),
    width: '100%',
  },
  textList: {
    fontSize: fs(15),
    fontWeight: '500',
    marginLeft: hp(5),
    color: 'black',
  },
  imageView: {
    height: hp(54),
    width: wp(54),
    resizeMode: 'contain',
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(10),
    justifyContent: 'center',
  },
  ratingImage: {
    height: hp(11),
    width: wp(11),
  },
});

export default StylistsList;
