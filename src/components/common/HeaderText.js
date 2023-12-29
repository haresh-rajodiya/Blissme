//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {commonStyles} from '../../helper/commonStyle';
import {fs, hp, wp} from '../../helper/helper';
import {onPress} from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';

// create a component
const HeaderText = ({title, marginTop, text, onPress}) => {
  return (
    <View
      style={{
        marginTop,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: wp(16),
      }}>
      <Text style={[commonStyles.HeaderText]}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={{fontSize: fs(10), fontWeight: '400', color: 'black'}}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: '#2c3e50',
  //   },
});

//make this component available to the app
export default HeaderText;
