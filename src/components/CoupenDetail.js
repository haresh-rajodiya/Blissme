import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {icons} from '../helper/imageConstans';
import {fs, hp, wp} from '../helper/helper';
import {colors} from '../helper';

const CouponDetails = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={icons.eyeOpen} />
      </View>
      <View>
        <Text style={styles.headerText}>{'CoupenCode: SPA30'}</Text>
        <Text style={styles.text}>
          {'10% off booking'}
          <Text>
            {'Used: '}
            <Text>{'20'}</Text>
          </Text>
        </Text>
        <Text style={styles.text}>
          {'SD: 16 Jun - 9:13 Pm 17 Jun - 9:13 Pm'}
        </Text>
      </View>
      <View style={{alignSelf: 'flex-end'}}>
        <ToggleSwitch
          isOn={true}
          onColor="green"
          offColor="red"
          size="medium"
          onToggle={isOn => console.log('changed to : ', isOn)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginHorizontal: wp(16),
    flexDirection: 'row',
    marginTop: hp(30),
    height: hp(90),
  },
  image: {
    height: hp(89),
    width: wp(89),
  },
  headerText: {
    fontSize: fs(16),
    fontWeight: '700',
    marginTop: hp(8),
    color: colors.black,
  },
  text: {
    fontSize: fs(12),
    fontWeight: '400',
    marginTop: hp(5),
    color: colors.blacks,
  },
});

export default CouponDetails;
