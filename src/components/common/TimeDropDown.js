import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SelectCountry} from 'react-native-element-dropdown';
import {fs, hp, wp} from '../../helper/helper';
import {DropdownTimeData} from '../../helper/dummyData';

const TimeDropdown = ({style}) => {
  const [timing, setTiming] = useState('1');
  const [data, setData] = useState(DropdownTimeData);

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

export default TimeDropdown;

const styles = StyleSheet.create({
  dropdown: {
    // margin: 16,
    height: hp(29),
    width: wp(172),
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
