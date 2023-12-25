import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {icons} from '../helper/imageConstans';
import {hp, wp} from '../helper/helper';
import {commonStyles} from '../helper/commonStyle';
import {colors} from '../helper/colors';
import Header from './Header';

const DrawerButton = ({offersScreen, terms, privacy, about}) => {
  //  const navigation = useNavigation();
  // const {navigate} = useNavigation();

  return (
    <View style={styles?.container}>
      <TouchableOpacity style={styles?.mainContainer}>
        <View
          // onPress={() => navigation.navigate('NearbyStore')}
          style={styles.DrawerTouchable}>
          <Image style={[styles.DrawerImage]} source={icons.logo} />
        </View>
        <Text style={[commonStyles.HeaderText, {marginLeft: wp(35.22)}]}>
          ProExelancers
        </Text>
      </TouchableOpacity>
      <View
        style={{height: 2, backgroundColor: 'black', marginTop: hp(14)}}></View>
      <TouchableOpacity style={styles?.mainContainer}>
        <Text style={commonStyles.HeaderText}>My Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles?.mainContainer} onPress={offersScreen}>
        <Text style={commonStyles.HeaderText}>Offers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles?.mainContainer}>
        <Text style={commonStyles.HeaderText} onPress={terms}>
          Terms & Condition
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles?.mainContainer} onPress={privacy}>
        <Text style={commonStyles.HeaderText}>Privacy & Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles?.mainContainer}>
        <Text style={commonStyles.HeaderText}>Invite a friends</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles?.mainContainer} onPress={about}>
        <Text style={commonStyles.HeaderText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles?.mainContainer,
          {
            position: 'absolute',
            bottom: 0,
          },
        ]}>
        <View
          //  onPress={() => navigation.navigate('Profile')}
          style={[styles.DrawerTouchable]}>
          <Image
            style={[
              styles.DrawerImage,
              {height: 25, width: 25, tintColor: '#000'},
            ]}
            source={icons.logout}
          />
        </View>
        <Text style={[commonStyles.HeaderText]}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  DrawerTouchable: {
    height: hp(50),
    width: wp(50),
    borderRadius: 25,
    justifyContent: 'center',
  },
  DrawerImage: {
    height: hp(50),
    width: wp(50),
    borderRadius: 25,
  },
  mainContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginTop: hp(40),
    alignItems: 'center',

    marginLeft: wp(30),
  },
  container: {
    backgroundColor: colors.white,
    height: '98%',
  },
});

export default DrawerButton;
