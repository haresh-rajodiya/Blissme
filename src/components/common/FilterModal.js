import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
import {fs, hp, wp} from '../../helper/helper';
import {colors} from '../../helper';
import CheckBoxButton from './CheckBox';

const FilterModal = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionSelect = option => {
    setSelectedOption(option);
  };
  const renderRadioOptions = options => {
    return options.map(option => (
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginTop: hp(20)}}>
        <TouchableOpacity
          key={option}
          style={[
            styles.radioButton,
            selectedOption === option && styles.selectedRadioButton,
          ]}
          onPress={() => handleOptionSelect(option)}></TouchableOpacity>
        <Text style={{marginLeft: wp(10), color: colors.black}}>{option}</Text>
      </View>
    ));
  };
  const radioOptions = [
    'Most Popular',
    'Price : Low to High',
    'Price : High to Low ',
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{'Place'}</Text>
      <View style={styles.checkBoxView}>
        <CheckBoxButton />
        <Text style={styles.checkBoxText}>{'Near by'}</Text>
      </View>
      <Text style={styles.headerText}>{'Sort By'}</Text>

      <View style={{width: wp(300)}}>{renderRadioOptions(radioOptions)}</View>

      <Text style={styles.headerText}>{'Set your Budget'}</Text>
      <View style={{alignItems: 'center', marginTop: hp(20)}}>
        <Progress.Bar
          progress={0.5}
          width={wp('100%')}
          style={{width: '85%'}}
          color={colors.pink}
        />
        <View style={styles.progressTextView}>
          <Text style={styles.progressText}>{'HK$ 0'}</Text>
          <Text style={styles.progressText}>{'HK$ 2000'}</Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{'Cancel'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{'Apply'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: fs(17),
    fontWeight: '700',
    marginTop: hp(39),
    marginLeft: wp(25),
    color: colors.black,
  },
  checkBoxView: {
    flexDirection: 'row',
    marginLeft: wp(19),
    marginTop: hp(20),
    alignItems: 'center',
  },
  checkBoxText: {
    fontSize: fs(16),
    fontWeight: '400',
    marginLeft: wp(10),
    color: colors.black,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 25,
    padding: 10,
    marginVertical: 5,
    marginLeft: wp(20),
    width: wp(25),
    height: hp(25),
  },
  selectedRadioButton: {
    backgroundColor: '#F93A8B',
  },
  progressText: {
    fontSize: fs(13),
    fontWeight: '500',
    color: colors.black,
  },
  progressTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginTop: hp(11),
  },
  button: {
    height: hp(29),
    width: wp(82),
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: hp(7),
  },
  buttonText: {
    fontSize: fs(15),
    fontWeight: '700',
    color: colors?.white,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: hp(30),
    width: '85%',
  },
});

export default FilterModal;
