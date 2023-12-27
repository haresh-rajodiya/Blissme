import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {fs, hp, wp} from '../helper/helper';
import {icons} from '../helper/imageConstans';

const StylistDetails = ({name, profession, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.professionView}>
        <Text style={{fontSize: fs(16), fontWeight: '400', width: wp(220)}}>
          {profession}
        </Text>
        <ToggleSwitch
          isOn={true}
          onColor="green"
          offColor="red"
          size="medium"
          onToggle={isOn => console.log('changed to : ', isOn)}
        />
        <TouchableOpacity onPress={onPress}>
          <Image style={styles.imageView} source={icons.edit} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(16),
    marginTop: hp(30),
  },
  text: {
    fontSize: fs(16),
    fontWeight: '700',
    color: '#000',
  },
  professionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(6),
  },
  imageView: {height: hp(18), width: wp(18)},
});

export default StylistDetails;
