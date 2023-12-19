import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import {ServiceData} from '../../helper/dummyData';
import CheckBoxButton from './CheckBox';
import {fs, hp, wp} from '../../helper/helper';

const Item = ({item}) => {
  return (
    <View style={styles.mainView}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <CheckBoxButton />
        </View>

        <Text style={styles.titleText}>{item?.title}</Text>
      </View>
      <View>
        <Text style={styles.pricetext}>
          {item?.currency}
          <Text>
            {item?.price}

            <Text>{item?.time}</Text>
          </Text>
        </Text>
      </View>
    </View>
  );
};
const ServiceDataList = () => {
  const [data, setData] = useState(ServiceData);

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={data}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(15),
    marginHorizontal: wp(15),
  },
  titleText: {
    fontSize: fs(14),
    fontWeight: '400',
    width: wp(200),
    marginLeft: wp(6),
  },
  priceText: {
    fontSize: fs(15),
    fontWeight: '500',
    width: wp(120),
  },
});

export default ServiceDataList;
