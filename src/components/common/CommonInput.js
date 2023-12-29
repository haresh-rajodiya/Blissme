import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {fs, hp, wp} from '../../helper/helper';

const CommonInput = ({Data}) => {
  const [text, onChangeText] = useState(Data);
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: hp(29),
    width: wp(162),
    backgroundColor: '#EBEBEB',
    fontSize: fs(16),
    paddingBottom: hp(4),
    paddingLeft: wp(13),
    fontWeight: '400',
    borderRadius: 2,
    marginTop: hp(7),
  },
});

export default CommonInput;
