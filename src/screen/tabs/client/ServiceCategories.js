import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ClientHeader from '../../../components/common/ClientHeader';
import {commonStyles} from '../../../helper/commonStyle';
import {fs, hp, wp} from '../../../helper/helper';
import {icons} from '../../../helper/imageConstans';
import ClientTextInput from '../../../components/common/ClientTextInput';
import CheckBoxButton from '../../../components/common/CheckBox';
// import OfferButton from '../../../components/OfferButton';
import HeaderText from '../../../components/common/HeaderText';

import firestore from '@react-native-firebase/firestore';

const ServiceCategories = ({navigation}) => {
  const [categories, setCategories] = useState('');
  const [subCategories, setSubCategories] = useState('');
  const [time, setTime] = useState('');
  const [cost, setCost] = useState('');
  const [platformCost, setPlatformCost] = useState('');

  const [selectedOption, setSelectedOption] = useState(null);

  const handleData = async () => {
    try {
      if (
        categories.length > 0 &&
        subCategories.length > 0 &&
        time.length > 0 &&
        cost.length > 0 &&
        platformCost.length > 0
      ) {
        console.log(handleData);

        const userData = {
          categories: categories,
          subCategories: subCategories,
          time: time,
          cost: cost,
          platformCost: platformCost,
        };
        console.log(userData);
        setCategories('');
        setSubCategories('');
        setTime('');
        setCost('');
        setPlatformCost('');
        await firestore().collection('product').add(userData);
      } else {
        alert('Please Enter All Data');
      }
    } catch (err) {
      console.log(err);

      // setMessage(err.message);
    }
  };

  firestore()
    .collection('product')
    .doc('')
    .get()
    .then(documentSnapshot => {
      console.log('User exists: ', documentSnapshot.exists);

      if (documentSnapshot.exists) {
        console.log('User data: ', documentSnapshot.data());
      }
    });

  const handleOptionSelect = option => {
    console.log('====================================');
    console.log(option);
    if (option === 'Save') {
    }
    console.log('====================================');
    setSelectedOption(option);
  };
  const renderRadioOptions = options => {
    return options.map(option => (
      <TouchableOpacity
        key={option}
        style={[
          styles.radioButton,
          selectedOption === option && styles.selectedRadioButton,
        ]}
        onPress={() => handleOptionSelect(option)}>
        {/*  onPress={() => handleData()}> */}
        <Text
          style={[
            styles.text,
            selectedOption === option && styles.selectedText,
          ]}>
          {option}
        </Text>
      </TouchableOpacity>
    ));
  };
  const radioOptions = ['Save', 'Delete'];

  return (
    <SafeAreaView style={styles.container}>
      <ClientHeader
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[
          commonStyles.headerRightContainer,
          {height: hp(19), tintColor: '#fff'},
        ]}
        addImage={icons.backArrow}
        drawer={() => navigation.goBack()}
        title={'Services'}
        rightContainer={commonStyles.headerRightContainer}
        rightIcon={[commonStyles.headerRightContainer, {tintColor: '#fff'}]}
        rightImage={icons.add}
      />
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.mainView}>
            <HeaderText title={'Main Categories Name'} />

            <Image style={styles.mainViewImage} source={icons.redStar} />
          </View>
          <ClientTextInput
            value={categories}
            onChangeText={e => {
              setCategories(e);
            }}
          />
          <HeaderText title={'Sub categories'} marginTop={25} />

          <ClientTextInput
            value={subCategories}
            onChangeText={e => {
              setSubCategories(e);
            }}
          />
          <HeaderText title={'Service Time'} marginTop={25} />

          <ClientTextInput
            value={time}
            onChangeText={e => {
              setTime(e);
            }}
          />

          <HeaderText title={'Cost'} marginTop={25} />
          <ClientTextInput
            placeholder={'Service cost'}
            value={cost}
            onChangeText={e => {
              setCost(e);
            }}
          />

          <ClientTextInput
            placeholder={'Platform cost'}
            value={platformCost}
            onChangeText={e => {
              setPlatformCost(e);
            }}
          />

          <HeaderText title={'Total'} marginTop={25} />
          <HeaderText title={'HK$ 588'} marginTop={25} />
          <View style={styles.CheckBoxView}>
            <CheckBoxButton />
            <Text style={[commonStyles.CommonText, {marginLeft: wp(12)}]}>
              {'I agree to the terms and conditions'}
            </Text>
          </View>
          <View>{renderRadioOptions(radioOptions)}</View>
          {/* <OfferButton title={'Save'} height={hp(43)} />
          <OfferButton title={'Delete'} height={hp(43)} /> */}
          <View style={{height: hp(50)}}></View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
//<HeaderText title={'Contact'} marginTop={22} />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    flexDirection: 'row',
    marginTop: hp(20),
    alignItems: 'center',
  },
  mainViewImage: {height: hp(12), width: wp(12), marginLeft: wp(9)},
  CheckBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(20),
    marginLeft: wp(16),
  },
  radioButton: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.pink,
    height: hp(43),
    marginHorizontal: wp(16),
    borderRadius: 5,
    marginTop: hp(20),
    borderWidth: 0.3,
    borderColor: '#000',
  },
  selectedRadioButton: {
    backgroundColor: '#F93A8B',
    borderColor: '#fff',
  },
  text: {
    fontSize: fs(20),
    fontWeight: '500',
    color: '#000',
  },
  selectedText: {
    color: '#fff',
  },
});
export default ServiceCategories;
