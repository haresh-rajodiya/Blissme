import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {colors} from '../../helper';
import {fs, hp, wp} from '../../helper/helper';
// import {
//   keyboardType,
//   multiline,
// } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';

const ClientTextInput = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  autoFocus,
  multiline,
  keyboardType,
}) => {
  return (
    <View
      style={{
        marginTop: hp(15),
        // borderBottomWidth: 1,
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
        multiline={multiline}
        keyboardType={keyboardType}
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
