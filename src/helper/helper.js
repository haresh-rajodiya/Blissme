// import {Dimensions, Platform} from 'react-native';
// import {
//   widthPercentageToDP,
//   heightPercentageToDP,
// } from 'react-native-responsive-screen';
// import {RFValue} from 'react-native-responsive-fontsize';
// import {getStatusBarHeight} from 'react-native-status-bar-height';
// export const isIOS = Platform.OS === 'ios';
// export const fontSize = val => RFValue(val, 812);

// const {width, height} = Dimensions.get('screen');
// // export const statusBarHeight = getStatusBarHeight();
// // export function heightPercentage(value) {
// // return (height * value) / 100;
// // }
// // export function widthPercentage(value) {
// // return (width * value) / 100;
// // }

// // console.log('width', width);
// // console.log('height', height);

// export const wp = val => widthPercentageToDP((val * 100) / width);
// export const hp = val => heightPercentageToDP((val * 100) / height);
// export const statusBarHeight = ((getStatusBarHeight() * 100) / 812).toFixed(2);

import {Platform, Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const isIos = Platform.OS === 'ios';
export const statusBarHeight = getStatusBarHeight();
export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;
export const wp = val => widthPercentageToDP((val * 100) / 375);
export const hp = val => heightPercentageToDP((val * 100) / 812);
export const fs = val => RFValue(val, 812);
export const tabBarHeight = hp(7.88);
export const keyboardType = {
  numeric: 'numeric',
};
