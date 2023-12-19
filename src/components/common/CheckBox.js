import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {hp, wp} from '../../helper/helper';
import {colors} from '../../helper';

const CheckBoxButton = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
        tintColors={{true: colors.pink, false: colors.grey}}
        onCheckColor="#fff"
        onFillColor={colors.pink}
        onTintColor={colors.pink}
        boxType="square"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkbox: {
    height: hp(24),
    width: wp(24),
    borderRadius: 5,
  },
});

export default CheckBoxButton;
