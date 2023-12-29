import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SelectCountry} from 'react-native-element-dropdown';
import {slotTimingData} from '../helper/dummyData';
import {fs, hp, wp} from '../helper/helper';

const SlotTimingDropDown = ({style}) => {
  const [timing, setTiming] = useState('1');
  const [data, setData] = useState(slotTimingData);

  return (
    <View style={{style}}>
      <SelectCountry
        style={[styles.dropdown]}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        //   imageStyle={styles.imageStyle}
        //   iconStyle={styles.iconStyle}
        maxHeight={200}
        value={timing}
        data={data}
        valueField="value"
        labelField="lable"
        //   imageField="image"
        placeholder="Select country"
        searchPlaceholder="Search..."
        onChange={e => {
          setTiming(e.value);
        }}
      />
    </View>
  );
};

export default SlotTimingDropDown;

const styles = StyleSheet.create({
  dropdown: {
    // margin: 16,
    height: hp(29),
    width: wp(162),
    backgroundColor: '#EEEEEE',
    borderRadius: 2,
    paddingHorizontal: wp(8),
    marginTop: hp(7),
  },
  //   imageStyle: {
  //     width: 24,
  //     height: 24,
  //     borderRadius: 12,
  //   },
  placeholderStyle: {
    fontSize: fs(16),
  },
  selectedTextStyle: {
    fontSize: fs(16),
    marginLeft: wp(8),
  },
  //   iconStyle: {
  //     width: 20,
  //     height: 20,
  //   },
});
