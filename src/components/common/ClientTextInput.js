import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {colors} from '../../helper';
import {fs, hp, wp} from '../../helper/helper';

const ClientTextInput = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  autoFocus,
}) => {
  return (
    <View
      style={{
        marginTop: hp(15),
      }}>
      <TextInput
        value={value}
        secureTextEntry={secureTextEntry}
        style={[styles.TextInput]}
        placeholder={placeholder}
        placeholderTextColor={colors?.lightgrey}
        onChangeText={onChangeText}
        autoFocus={autoFocus}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    fontSize: fs(16),
    fontWeight: '400',
    marginHorizontal: wp(16),
    textAlignVertical: 'center',
    padding: 0,
    borderBottomWidth: 1,
  },
});

export default ClientTextInput;
