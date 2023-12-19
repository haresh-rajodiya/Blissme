import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {hp, wp} from '../../helper/helper';
import {colors} from '../../helper';

const DATA = [
  {
    id: '0',
    title: 'Beauty',
    navigateTo: 'SCREEN_NAME',
  },
  {
    id: '1',
    title: 'Face Wash',
    navigateTo: 'SCREEN_NAME',
  },
  {
    id: '2',
    title: 'Face Massage',
    navigateTo: 'FaceMassage',
  },
  {
    id: '3',
    title: 'Leg Massage',
    navigateTo: 'SCREEN_NAME',
  },
  {
    id: '4',
    title: 'Face glow',
    navigateTo: 'SCREEN_NAME',
  },
];
const Item = ({item, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={[styles.TouchableIconView]}>
      <Text style={styles.listTextStyle}>{item?.title}</Text>
    </TouchableOpacity>
  );
};

const ButtonList = ({onPress}) => {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item item={item} onPress={onPress} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TouchableIconView: {
    borderBlockColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(35),
    minWidth: wp(100),
    borderRadius: 38,
    marginTop: hp(17),
    borderWidth: hp(1),
    marginHorizontal: wp(4),
  },
  listTextStyle: {
    fontSize: hp(15),
    fontWeight: '400',
    color: colors.grey,
    textAlign: 'center',
    marginHorizontal: wp(10),
  },
});

export default ButtonList;
