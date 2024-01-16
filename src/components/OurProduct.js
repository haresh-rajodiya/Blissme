import React, {useState} from 'react';
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
import CountButton from './common/CountButton';
import useCartStore from '../zustand/CartStore';

const Item = ({item, onPress, ButtonPress}) => {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const {reduceProduct, addProduct} = useCartStore();

  const handleButtonPress = buttonId => {
    if (selectedButtons.includes(buttonId)) {
      setSelectedButtons(selectedButtons.filter(id => id !== buttonId));
    } else {
      setSelectedButtons([...selectedButtons, buttonId]);
    }
  };
  return (
    <TouchableOpacity style={styles.list} onPress={() => onPress()}>
      <View style={styles.listView}>
        <Image style={styles.imageView} source={item?.image} />
      </View>
      <View style={{marginLeft: wp(11), flex: 1}}>
        <Text style={styles?.salonName}>{item?.title}</Text>
        <TouchableOpacity>
          <Text style={styles.timeText}>{item?.name}</Text>
        </TouchableOpacity>
        <View style={styles.bottomView}>
          <TouchableOpacity style={{flexDirection: 'row', marginTop: hp(0)}}>
            <Image style={styles.iconView} source={icons.locationDark} />
            <Text>{item?.distance}</Text>
          </TouchableOpacity>
          {Item.qty == 0 ? null : (
            <TouchableOpacity style={[styles.buttonView]}>
              <Text style={styles.buttonText}>{'Add'}</Text>
            </TouchableOpacity>
          )}

          {Item.qty == 0 ? (
            <CountButton
              remove={() => reduceProduct(item)}
              add={() => addProduct(item)}
            />
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const   OurProductList = ({DATA, onPress, ButtonPress}) => {
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
    marginVertical: hp(25),
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
    color: colors.grey,
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
  },
  buttonText: {
    fontSize: fs(15),
    fontWeight: '700',
    color: colors?.white,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(13),
  },
});

export default OurProductList;
