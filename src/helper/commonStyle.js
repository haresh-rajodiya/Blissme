import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {fs, hp, wp} from './helper';
export const commonStyles = StyleSheet.create({
  commonContainer: {
    flex: 1,
    backgroundColor: colors?.white,
    padding: 10,
  },
  HeaderText: {
    fontSize: fs(20),
    fontWeight: '500',
    color: colors?.black,
  },
  CommonText: {
    fontSize: fs(15),
    fontWeight: '400',
    color: colors?.black,
  },
  touchableText: {
    alignItems: 'center',
  },
  headerRightContainer: {
    height: hp(24),
    width: wp(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRightIcon: {
    height: hp(14),
    width: wp(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
