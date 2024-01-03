import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageBackgroundView from '../../components/SplashImage';
import {icons} from '../../helper/imageConstans';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      checkLogin();
    }, 2000);
  }, []);
  const checkLogin = async () => {
    const id = await AsyncStorage.getItem('USERID');
    if (id !== null) {
      navigation.navigate('LoginScreen');
    } else {
      navigation.navigate('Signup');
    }
  };
  return (
    <>
      <ImageBackgroundView>
        <Image style={styles.logoImage} source={icons.OilMask} />
        <Text style={styles.logoText}>{'  Blissme  '} </Text>
      </ImageBackgroundView>
    </>
  );
};

export default Splash;
const styles = StyleSheet.create({
  logoText: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },
  logoImage: {
    height: '10%',
    width: '20%',
  },
});
