import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../helper/colors';
import {hp, wp} from '../helper/helper';
import {ClientDashboardIconList} from '../helper/dummyData';

const Item = ({item, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.TouchableIconView]}
      onPress={() => onPress(item)}>
      <View style={[styles.IconView]}>{item?.icon}</View>
      <Text style={styles.listTextStyle}>{item?.title}</Text>
    </TouchableOpacity>
  );
};

const ClientDetailList = ({onPress}) => {
  const {navigate, goBack} = useNavigation();
  const [data, setData] = useState(ClientDashboardIconList);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: hp(19),
          alignItems: 'center',
        }}>
        <FlatList
          style={styles.listStyle}
          data={data}
          renderItem={({item}) => <Item item={item} onPress={onPress} />}
          keyExtractor={item => item.id}
          numColumns={'2'}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  TouchableIconView: {
    borderBlockColor: colors.grey,
    alignItems: 'center',
    height: hp(150),
    width: wp(180),
    borderRadius: 3,
    marginTop: hp(31),
    justifyContent: 'center',
  },
  listTextStyle: {
    fontSize: hp(20),
    fontWeight: '500',
    marginTop: hp(14),
    color: '#000',
  },
});

export default ClientDetailList;
