import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {hp, wp} from '../../../helper/helper';
import {commonStyles} from '../../../helper/commonStyle';
import Header from '../../../components/Header';
import {icons} from '../../../helper/imageConstans';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import RadioButton from '../../../components/RadioButton';
import AddToCartButton from '../../../components/AddToCartButton';
import {source} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
// import {RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET} from '@env';
// import RazorpayCheckout from 'react-native-razorpay';

const PaymentMethod = ({navigation}) => {
  const [radioValue, setRadioValue] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionSelect = option => {
    setSelectedOption(option);
  };
  const renderRadioOptions = options => {
    return options.map(option => (
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginTop: hp(30)}}>
        <TouchableOpacity
          key={option}
          style={[
            styles.radioButton,
            selectedOption === option && styles.selectedRadioButton,
          ]}
          onPress={() => handleOptionSelect(option)}></TouchableOpacity>
        <Text style={{marginLeft: wp(10)}}>{option}</Text>
      </View>
    ));
  };
  const radioOptions = ['Stripe', 'Paypal', 'Pay at Shop'];
  // const Options = [
  //   <View style={{height: hp(25), width: wp(25)}}>
  //     <Image style={{height: hp(25), width: wp(25)}} source={icons.apple} />
  //   </View>,
  // ];

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
      <View>
        {/* <RadioButton
          value={radioValue}
          changeValue={() => setRadioValue(!radioValue)}
        /> */}

        {/* <RadioButton
          value={radioValue}
          changeValue={() => setRadioValue(!radioValue)}
        /> */}
      </View>

      <AddToCartButton
        title={'Make Payment'}
        value={'1492'}
        text={'Total'}
        // cart={handlePayment}
        // cart={() => navigation.navigate('PaymentMethod')}
      />
      <View style={{marginTop: hp(31)}}>
        <View>{renderRadioOptions(radioOptions)}</View>
      </View>
    </SafeAreaView>
  );
  // })
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 25,
    padding: 10,
    marginVertical: 5,
    marginLeft: wp(20),
    width: wp(25),
    height: hp(25),
  },
  selectedRadioButton: {
    backgroundColor: '#F93A8B',
  },
});

export default PaymentMethod;

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// const CustomRadioButton = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };
//   const renderRadioOptions = (options) => {
//     return options.map((option) => (
//       <TouchableOpacity
//         key={option}
//         style={[
//           styles.radioButton,
//           selectedOption === option && styles.selectedRadioButton,
//         ]}
//         onPress={() => handleOptionSelect(option)}
//       >
//         <Text>{option}</Text>
//       </TouchableOpacity>
//     ));
//   };
//   const radioOptions = ['Option 1', 'Option 2', 'Option 3'];
//   return (
//     <View>
//       <View>
//         <Text>Choose an option:</Text>
//       </View>
//       <View>{renderRadioOptions(radioOptions)}</View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   radioButton: {
//     borderWidth: 1,
//     borderColor: '#000',
//     borderRadius: 12,
//     padding: 10,
//     marginVertical: 5,
//   },
//   selectedRadioButton: {
//     backgroundColor: '#4caf50',
//   },
// });
// export default CustomRadioButton;
