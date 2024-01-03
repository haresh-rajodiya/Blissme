import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {hp, wp} from '../helper/helper';
import {colors} from '../helper';
import {CategoriesList} from '../helper/dummyData';
import {id} from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';

const Item = ({item, onPress}) => {
  return (
    <TouchableOpacity
      //   onPress={() => onPress(item)}
      style={[styles.TouchableIconView]}>
      <Text style={styles.listTextStyle}>{item?.title}</Text>
    </TouchableOpacity>
  );
};

const ClientCategories = ({onPress}) => {
  const [data, setData] = useState(CategoriesList);
  return (
    <View style={{marginLeft: wp(16)}}>
      <FlatList
        data={data}
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
    borderRadius: 2,
    marginTop: hp(9),
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

export default ClientCategories;
