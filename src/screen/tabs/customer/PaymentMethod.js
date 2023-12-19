import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {hp, wp} from '../../../helper/helper';
import {commonStyles} from '../../../helper/commonStyle';
import Header from '../../../components/Header';
import {icons} from '../../../helper/imageConstans';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import RadioButton from '../../../components/RadioButton';
import AddToCartButton from '../../../components/AddToCartButton';
// import {RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET} from '@env';
// import RazorpayCheckout from 'react-native-razorpay';

const PaymentMethod = ({navigation}) => {
  const [radioValue, setRadioValue] = useState(false);

  // let razorpayKeyId = RAZORPAY_KEY_ID;
  // let razorpayKeySecret = RAZORPAY_KEY_SECRET;
  // console.log(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET);

  // const amount = 1492;
  // const currency = 'INR';

  // const handlePayment = () => {
  //   var options = {
  //     description: 'Buy BMW CAR',
  //     image:
  //       'https://media.istockphoto.com/id/639695818/photo/photographer-workplace.jpg?s=1024x1024&w=is&k=20&c=3puvOnZJWmuXv_5L76LLroWemCqVvZ-5_Oux_xvEa7w=',
  //     currency: currency,
  //     key: razorpayKeyId,
  //     amount: amount * 100,
  //     name: 'Pro Exe',
  //     order_id: '',
  //     prefill: {
  //       email: 'xyz@gmail.com',
  //       contact: '9999999999',
  //       name: 'User 1',
  //     },
  //     theme: {color: '#F37254'},
  //   };

  //   RazorpayCheckout.open(options)
  //     .then(data => {
  //       alert(`Success: ${data.razorpay_payment_id}`);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       alert(`Error: ${error.code} | ${error.description}`);
  //     });
  // };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[commonStyles.headerRightIcon]}
        drawer={() => navigation.goBack()}
        addImage={icons.back}
        title={'Select Payment Method'}
      />
      <Text
        style={[
          commonStyles.HeaderText,
          {marginLeft: wp(16), marginTop: hp(50)},
        ]}>
        {'Choose your Payment gateway'}
      </Text>

      <RadioButton
        value={radioValue}
        changeValue={() => setRadioValue(!radioValue)}
      />

      <RadioButton
        value={radioValue}
        changeValue={() => setRadioValue(!radioValue)}
      />

      <AddToCartButton
        title={'Make Payment'}
        value={'1492'}
        text={'Total'}
        cart={handlePayment}
        // cart={() => navigation.navigate('PaymentMethod')}
      />
    </SafeAreaView>
  );
  // })
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default PaymentMethod;
