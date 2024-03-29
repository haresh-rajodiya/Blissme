import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import MapView from 'react-native-maps';
import {fs, hp, wp} from '../../../helper/helper';
import {commonStyles} from '../../../helper/commonStyle';
import {icons} from '../../../helper/imageConstans';
import Header from '../../../components/Header';
import Button from '../../../components/common/Button';

const SetLocation = ({navigation}) => {
  const [houseNo, setHouseNo] = useState('');
  const [address, setAddress] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header
          leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
          leftIcon={[commonStyles.headerRightContainer, {height: hp(19)}]}
          addImage={icons.drawer}
          drawer={() => navigation.openDrawer()}
          title={'Set your location'}
        />

        {/* <Image
          style={{marginTop: hp(30), height: hp(292), width: '100%'}}
          source={icons.map}
        /> */}
        <MapView
          style={{marginTop: hp(30), height: hp(292), width: '100%'}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <Text
          style={[
            commonStyles.HeaderText,
            {marginLeft: wp(16), marginTop: hp(57)},
          ]}>
          {'Choose your location'}
        </Text>
        <Text
          style={[
            commonStyles.CommonText,
            {marginLeft: wp(16), marginTop: hp(12), color: '#B7B7B7'},
          ]}>
          {'House/Flat/Block N'}
        </Text>
        <TextInput
          style={[styles.mobileInput]}
          value={houseNo}
          //  keyboardType="numeric"
          onChangeText={e => {
            setHouseNo(e);
          }}
        />
        <Text
          style={[
            commonStyles.CommonText,
            {marginLeft: wp(16), marginTop: hp(31), color: '#B7B7B7'},
          ]}>
          {'Address'}
        </Text>
        <TextInput
          style={[styles.mobileInput]}
          value={address}
          //  keyboardType="numeric"
          onChangeText={e => {
            setAddress(e);
          }}
        />
        <Button title={'Save'} color={'#F93A8B'} style={hp(45)} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mobileInput: {
    height: hp(43),
    width: '95%',
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
    marginTop: hp(10),
    fontSize: fs(20),
    paddingHorizontal: wp(15),
  },
  map: {
    height: 400,
    marginTop: 80,
  },
});

export default SetLocation;
