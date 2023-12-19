import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {hp, wp} from '../helper/helper';

const WorkOrderHeader = ({
  title1,
  title2,
  leftSideText,
  rightSideText,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={leftSideText}>{title1}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress()}>
        <Text style={rightSideText}>{title2}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: hp(30),
    paddingHorizontal: hp(16),
  },
});

export default WorkOrderHeader;
