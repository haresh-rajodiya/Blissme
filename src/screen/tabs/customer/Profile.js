import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {colors} from '../../../helper/colors';
import Header from '../../../components/Header';
import {commonStyles} from '../../../helper/commonStyle';
import {fs, hp, wp} from '../../../helper/helper';
import {icons} from '../../../helper/imageConstans';
import Button from '../../../components/common/Button';

const Profile = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [width, setWidth] = useState(350);
  const [height, setHeight] = useState(500);

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width,
      height,
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
        setHeight(hp(60));
        setWidth(wp(60));
        console.log(image);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCameraPicker = () => {
    ImagePicker.openCamera({
      width,
      height,
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
        setHeight(hp(60));
        setWidth(wp(60));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCropImage = () => {
    if (selectedImage) {
      ImagePicker.openCropper({
        path: selectedImage,
        width,
        height,
        cropping: true,
        cropperCircleOverlay: true, // Set to true if you want a circular crop
        freeStyleCropEnabled: true,
      })
        .then(image => {
          setSelectedImage(image.path);
          setHeight(hp(60));
          setWidth(wp(60));
          console.log(image);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[commonStyles.headerRightContainer, {height: hp(19)}]}
        addImage={icons.drawer}
        drawer={() => navigation.openDrawer()}
        title={'My Order'}
      />
      <View style={styles.ProfileView}>
        <TouchableOpacity
          style={styles.touchableImageView}
          onPress={handleImagePicker}>
          <Image
            source={{uri: selectedImage}}
            style={{width: width, height: height, borderRadius: 50}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cameraView}
          onPress={handleCameraPicker}>
          <Image
            source={icons.camera}
            style={{height: hp(12), width: wp(12)}}
          />
        </TouchableOpacity>
        <Text style={[commonStyles.HeaderText, {marginLeft: wp(23)}]}>
          {'Blissme'}
        </Text>
      </View>
      {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{marginTop: 20, marginBottom: 50}}>
          {selectedImage && (
            <Button title="Crop Image" onPress={handleCropImage} />
          )}
        </View>
      </View> */}
      <Text
        style={[
          commonStyles.HeaderText,
          {marginLeft: wp(16), marginTop: hp(22)},
        ]}>
        {'Personal info'}
      </Text>

      <Text
        style={[
          commonStyles.CommonText,
          {marginLeft: wp(16), marginTop: hp(12), color: '#B7B7B7'},
        ]}>
        {'Edit your name'}
      </Text>
      <View
        style={{
          alignItems: 'center',
        }}>
        <TextInput
          style={[styles.mobileInput]}
          value={name}
          // keyboardType="numeric"
          onChangeText={e => {
            setName(e);
          }}
        />
      </View>
      <Text
        style={[
          commonStyles.CommonText,
          {marginLeft: wp(16), marginTop: hp(12), color: '#B7B7B7'},
        ]}>
        {'Edit your email Id'}
      </Text>
      <View
        style={{
          alignItems: 'center',
        }}>
        <TextInput
          style={[styles.mobileInput]}
          value={email}
          //  keyboardType="numeric"
          onChangeText={e => {
            setEmail(e);
          }}
        />
      </View>
      <Text
        style={[
          commonStyles.CommonText,
          {marginLeft: wp(16), marginTop: hp(12), color: '#B7B7B7'},
        ]}>
        {'Edit your Contact number'}
      </Text>
      <View
        style={{
          alignItems: 'center',
        }}>
        <TextInput
          style={[styles.mobileInput]}
          value={mobile}
          keyboardType="numeric"
          onChangeText={e => {
            setMobile(e);
          }}
        />
      </View>
      <Text
        style={[
          commonStyles.HeaderText,
          {marginLeft: wp(16), marginTop: hp(57)},
        ]}>
        {'Manage your location'}
      </Text>
      <TouchableOpacity
        style={{
          marginLeft: wp(16),
          marginTop: hp(12),
          alignSelf: 'flex-start',
        }}
        onPress={() => navigation.navigate('SetLocation')}>
        <Text style={[commonStyles.CommonText, {color: '#2CA1F5'}]}>
          {'+Add New Location'}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: wp(8),
          justifyContent: 'space-between',
          marginTop: hp(25),
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{height: hp(16), width: wp(16)}}
            source={icons.location}
          />
          <Text style={{width: wp(250), marginLeft: wp(10)}}>
            {'2/F Stanley 11, No. 11 Stanley Street, Hong Kong China'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{height: hp(24), width: wp(24)}}
            source={icons.deleteRed}
          />
          <Text style={{color: 'red'}}>{' Remove'}</Text>
        </TouchableOpacity>
      </View>
      <Button title={'Save'} color={colors.pink} style={hp(44)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  cameraView: {
    height: hp(20),
    width: wp(20),
    borderRadius: 50,
    backgroundColor: colors.pink,
    marginTop: hp(25),
    marginLeft: wp(-12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableImageView: {
    height: hp(60),
    width: wp(60),
    borderRadius: 50,
    marginLeft: wp(12),
    borderWidth: 1,
  },
  ProfileView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(75),
    marginHorizontal: wp(16),
    marginTop: hp(18),
    elevation: 2,
    shadowColor: '#000',
  },
});

export default Profile;
