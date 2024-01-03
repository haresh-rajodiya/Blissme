// import React, {useState, useEffect} from 'react';
// import {View, Text, StyleSheet, Alert, Image, TextInput} from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import Button from '../../components/common/Button';
// import PrimaryTextInput from '../../components/common/PrimaryTextInput';
// import {colors} from '../../helper/colors';

// const LoginScreen = ({navigation}) => {
//   //==============================================================================
//   // MobileNo authentication

//   // const [mobileNo, setMobileNo] = useState('');
//   // const [otpInput, setOtpInput] = useState('');
//   // const [confirmData, setConfirmData] = useState('');

//   // const sendDotp = async () => {
//   //   try {
//   //     const mobile = '+91' + mobileNo;
//   //     const response = await auth().signInWithPhoneNumber(mobile);
//   //     setConfirmData(response);
//   //     alert('otp is send please verify it...');
//   //     console.log(response);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   // const submitotp = async () => {
//   //   const response = await confirmData.confirm(otpInput);
//   //   console.log(response);
//   //   alert('your number is verifyed..');
//   //   try {
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   // ======================================================================
//   // // Email authentication
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [visible, setVisible] = useState(true);
//   const [message, setMessage] = useState('');
//   const [isMob, setIsMob] = useState(false);
//   // console.log('hello');

//   const handleLogin = async () => {
//     try {
//       const isUserCreated = await auth().createUserWithEmailAndPassword(
//         email,
//         password,
//       );
//       console.log(isUserCreated);
//     } catch (error) {
//       console.log(error);
//       setMessage(error.message);
//     }
//   };
//   // ========================================================================
//   // await auth()
//   //   .createUserWithEmailAndPassword(email, password)
//   //   .then(res => {
//   //     console.log(res, 'User account created & signed in!');
//   //   })
//   //   .catch(error => {
//   //     if (error.code === 'auth/email-already-in-use') {
//   //       console.log('That email address is already in use!');
//   //     }

//   //     if (error.code === 'auth/invalid-email') {
//   //       console.log('That email address is invalid!');
//   //     }
//   //     console.error(error);
//   //   });

//   //};

//   const handleEmailPhone = email => {
//     setEmail(email);
//     setIsMob(/[a-z]/i.test(email));

//     var regExp = /[a-zA-Z]/g;
//     var testString = 'john';

//     if (regExp.test(testString)) {
//       /* do something if letters are found in your string */
//     } else {
//       /* do something if letters are not found in your string */
//     }
//     // let mob = /^[0-9]{10}$/;

//     // if (mob.test(email)) {
//     //   setIsMob(true);
//     // }
//   };
//   // function handleEmailPhone1(myString) {
//   //   return /\d/.test(myString);
//   // }

//   return (
//     <View style={styles.container}>
//       <KeyboardAwareScrollView>
//         <TextInput style={styles.input} />
//         <Text style={styles.loginText}>Login</Text>
//         <PrimaryTextInput
//           value={email}
//           // placeholder={'Enter your email id'}
//           // textInputLabel={'Email Address'}
//           onChangeText={email => handleEmailPhone(email)}

//           // textInputLabel={'Email / Mobile'}
//           // placeholder={'Enter Mobile Or Email'}
//           // onChangeText={value => setMobileNo(value)}
//         />
//         <PrimaryTextInput
//           value={password}
//           // textInputLabel={'Password'}
//           // placeholder="Enter your password"
//           // secureTextEntry={visible}
//           // onChangeText={password => setPassword(password)}
//           // onPressEye={() => setVisible(!visible)}
//           // Password

//           // textInputLabel={'OTP'}
//           // placeholder="Enter your OTP"
//           // onChangeText={value => setOtpInput(value)}
//         />
//         <Text style={styles.errorText}>{message}</Text>
//       </KeyboardAwareScrollView>

//       {/* <RoundButton onPress={() => handleLogin()} title={'SEND OTP'} />
//       <RoundButton onPress={() => handleLogin()} title={'SUBMIT'} /> */}
//       {console.log('handleEmailPhone111(email)', isMob)}
//       {!isMob && (
//         <Button
//           onPress={() => sendotp()}
//           title={'SEND OTP'}
//           style={{position: 'absolute', bottom: 0, right: 50}}
//         />
//       )}

//       <Button
//         onPress={() => submitotp()}
//         onLongPress={() => navigation.navigate('DashBoard')}
//         title={'Continue'}
//       />
//       {/* <RoundButton
//         onPress={() => navigation.navigate('DashBoard')}
//         title={'N E X T'}
//       /> */}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: colors?.white,
//   },
//   loginText: {
//     marginTop: 280,
//     marginBottom: 50,
//     fontSize: 42,
//     fontWeight: '500',
//     color: colors?.black,
//   },
//   errorText: {
//     color: colors?.red,
//   },
//   input: {
//     backgroundColor: colors.white,
//   },
// });

// export default LoginScreen;

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../components/common/Loader';
import Logo from '../../../components/Logo';
import {colors} from '../../../helper/colors';
import {hp, screenHeight, screenWidth, wp} from '../../../helper/helper';
import {commonStyles} from '../../../helper/commonStyle';
import Button from '../../../components/common/Button';
import SignupButton from '../../../components/SignupButton';

const LoginScreen = ({navigation}) => {
  const [data, setData] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [confirmData, setConfirmData] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  // const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '164015726872-a1eivv8th0pieh7vlqt1ab6lm047679q.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin?.hasPlayServices();
      const usrInfo = await GoogleSignin?.signIn();
      setUserInfo({usrInfo});
    } catch (error) {
      if (error?.code === statusCodes?.SIGN_IN_CANCELLED) {
      } else if (error?.code === statusCodes?.IN_PROGRESS) {
      } else if (error?.code === statusCodes?.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
        // some other error happened
      }
    }
  };

  signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUserInfo(null);
    } catch (error) {
      console.error(error);
    }
  };
  // const sendDotp = async () => {
  //   try {
  //     const mobile = '+91' + mobileNo;
  //     const response = await auth().signInWithPhoneNumber(mobile);
  //     setConfirmData(response);
  //     alert('otp is send please verify it...');
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const submitotp = async () => {
  //   const response = await confirmData.confirm(otpInput);
  //   console.log(response);
  //   alert('your number is verifyed..');
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleEmailPhone = email => {
  //   setEmail(email);
  //   setIsMob(/[a-z]/i.test(email));

  //   var regExp = /[a-zA-Z]/g;
  //   var testString = 'john';

  //   if (regExp.test(testString)) {
  //     /* do something if letters are found in your string */
  //   } else {
  //     /* do something if letters are not found in your string */
  //   }
  //   // let mob = /^[0-9]{10}$/;

  //   // if (mob.test(email)) {
  //   //   setIsMob(true);
  //   // }
  // };
  // // function handleEmailPhone1(myString) {
  // //   return /\d/.test(myString);
  // // }
  // console.log('====================================');
  // console.log('screenWidth', hp(16), screenHeight);
  // console.log('====================================');

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Logo style={hp(50)} />
        <Text style={[commonStyles.HeaderText, styles.logintext]}>Login</Text>
        <View style={{flexDirection: 'row', paddingHorizontal: wp(16)}}>
          <TextInput
            style={[styles.countryInput]}
            value={data}
            onChangeText={e => {
              setData(e);
            }}
          />
          <TextInput
            style={[styles.mobileInput]}
            value={data}
            keyboardType="numeric"
            onChangeText={e => {
              setData(e);
            }}
          />
        </View>
        <Button
          onPress={() => sendotp()}
          title={'Continue'}
          style={hp(40)}
          color={colors.black}
        />
        <Text style={[commonStyles.CommonText, styles.signupText]}>
          - Or sign up with -
        </Text>
        <View style={[styles.signupBtn]}>
          <SignupButton
            onPress={() => {
              signIn();
            }}
            addImage={require('../../../../assets/icon/google.png')}
          />
          <SignupButton
            // google signOut
            onPress={() => {
              signOut();
            }}
            style={colors.royalBlue}
            addImage={require('../../../../assets/icon/facebook.png')}
          />
          <SignupButton
            addImage={require('../../../../assets/icon/apple.png')}
          />
        </View>
        <View style={{}}>
          <Text style={[styles.signupText, {marginTop: hp(100)}]}>
            {"Don't have an account ?"}
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={[commonStyles.CommonText, {color: '#F93A8B'}]}>
                {'Register'}
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
        {/* <AlignedText style={{color: 'red'}} alignItems="center">
        Centered <Text style={{fontSize: 50}}>text</Text>
      </AlignedText> */}
        <Loader visible={visible} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: colors.white,
    // width: Dimensions.get('screen').width,
    // height: Dimensions.get('screen').height,
  },
  logintext: {
    marginTop: hp(155),
    marginLeft: wp(11),
  },
  signupText: {
    fontSize: hp(15),
    marginTop: hp(31),
    textAlign: 'center',
    alignSelf: 'center',
  },
  signupBtn: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(55),
  },
  countryInput: {
    height: hp(43),
    width: wp(63),
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
    marginRight: wp(15),
    marginTop: hp(47),
  },
  mobileInput: {
    height: hp(43),
    width: wp(301),
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
    marginTop: hp(47),
  },
});

export default LoginScreen;
