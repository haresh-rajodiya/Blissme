import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import {colors} from '../../../helper/colors';
import Header from '../../../components/Header';
import {commonStyles} from '../../../helper/commonStyle';
import PrimaryTextInput from '../../../components/common/PrimaryTextInput';
import {hp, wp} from '../../../helper/helper';
import Button from '../../../components/common/Button';
import {icons} from '../../../helper/imageConstans';
import Loader from '../../../components/common/Loader';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [visible, setVisible] = useState(false);

  const registerUser = () => {
    const userId = uuid.v4();
    firestore()
      .collection('users')
      .doc(userId)
      .set({
        name: name,
        email: email,
        mobile: mobile,
        userId: userId,
      })
      .then(res => {
        console.log('user created ');
        navigation.navigate('LoginScreen');
      })
      .catch(error => {
        console.log(error);
      });
  };
  const validate = () => {
    let isValid = true;
    if (name == '') {
      isValid = false;
    }
    if (email == '') {
      isValid = false;
    }
    if (mobile == '') {
      isValid = false;
    }

    return isValid;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={styles.headerLeftContainer}
        leftIcon={styles.headerLeftContainer}
        addImage={icons.back}
        title={'Create new Account'}
        drawer={() => navigation.goBack()}
      />
      <View style={{marginHorizontal: wp(16)}}>
        <Text style={[commonStyles.CommonText, {marginTop: hp(30)}]}>
          {'Name'}
        </Text>
        <PrimaryTextInput
          value={name}
          onChangeText={e => {
            setName(e);
          }}
        />
        <Text style={[commonStyles.CommonText, {marginTop: hp(30)}]}>
          {'Email id'}
        </Text>
        <PrimaryTextInput
          value={email}
          onChangeText={e => {
            setEmail(e);
          }}
        />
        <Text style={[commonStyles.CommonText, {marginTop: hp(30)}]}>
          {'Phone Number'}
        </Text>
        <PrimaryTextInput
          value={mobile}
          onChangeText={e => {
            setMobile(e);
          }}
        />
      </View>
      <Button
        title={'Create New Account'}
        color={colors.black}
        style={hp(25)}
        onPress={() => {
          if (validate()) {
            registerUser();
          } else {
            Alert.alert('Please Enter Correct Data');
          }
        }}
        // onPress={() => navigation.navigate('Verification')}
      />

      <Text style={[styles.signuptext]}>
        {'Already have an Account ?'}
        <TouchableOpacity onPress={() => navigate('LoginScreen')}>
          <Text style={{color: '#F93A8B'}}>{' Login'}</Text>
        </TouchableOpacity>
      </Text>
      <Text style={[styles.instructionText]}>
        {'By clicking create new account you agree to the'}
      </Text>
      <Text style={[styles.instructionText, {marginTop: hp(0)}]}>
        {'following Terms & Condition'}
      </Text>
      <Loader visible={visible} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  signuptext: {
    marginTop: hp(65),
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 15,
  },
  instructionText: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.black,
    textAlign: 'center',
    marginTop: hp(156),
  },
  headerLeftContainer: {
    height: hp(14),
    width: wp(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Signup;

// ========================================================================

// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   ScrollView,
// } from 'react-native';
// import React, {useState} from 'react';
// import {useNavigation} from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore';
// import uuid from 'react-native-uuid';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [visible, setVisible] = useState(false);
//   const navigation = useNavigation();

//   const registerUser = () => {
//     const userId = uuid.v4();
//     firestore()
//       .collection('users')
//       .doc(userId)
//       .set({
//         name: name,
//         email: email,
//         password: password,
//         mobile: mobile,
//         userId: userId,
//       })
//       .then(res => {
//         console.log('user created ');
//         navigation.navigate('LoginScreen');
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
//   const validate = () => {
//     let isValid = true;
//     if (name == '') {
//       isValid = false;
//     }
//     if (email == '') {
//       isValid = false;
//     }
//     if (mobile == '') {
//       isValid = false;
//     }
//     if (password == '') {
//       isValid = false;
//     }
//     if (confirmPassword == '') {
//       isValid = false;
//     }
//     if (confirmPassword !== password) {
//       isValid = false;
//     }
//     return isValid;
//   };
//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
//       <TextInput
//         placeholder="Enter Name"
//         style={[styles.input, {marginTop: 50}]}
//         value={name}
//         onChangeText={txt => setName(txt)}
//       />
//       <TextInput
//         placeholder="Enter Email"
//         style={[styles.input, {marginTop: 20}]}
//         value={email}
//         onChangeText={txt => setEmail(txt)}
//       />
//       <TextInput
//         placeholder="Enter Mobile"
//         keyboardType={'number-pad'}
//         style={[styles.input, {marginTop: 20}]}
//         value={mobile}
//         onChangeText={txt => setMobile(txt)}
//       />
//       <TextInput
//         placeholder="Enter Password"
//         style={[styles.input, {marginTop: 20}]}
//         value={password}
//         secureTextEntry={!visible}
//         onChangeText={txt => setPassword(txt)}
//         onPressEye={() => setVisible(!visible)}
//         password
//       />
//       <TextInput
//         placeholder="Enter Confirm Password"
//         style={[styles.input, {marginTop: 20}]}
//         value={confirmPassword}
//         secureTextEntry={!visible}
//         onChangeText={txt => setConfirmPassword(txt)}
//         onPressEye={() => setVisible(!visible)}
//         password
//       />
//       <TouchableOpacity
//         style={styles.btn}
//         onPress={() => {
//           if (validate()) {
//             registerUser();
//           } else {
//             Alert.alert('Please Enter Correct Data');
//           }
//         }}>
//         <Text style={styles.btnText}>Sign up</Text>
//       </TouchableOpacity>
//       <Text
//         style={styles.orLogin}
//         onPress={() => {
//           navigation.goBack();
//         }}>
//         Or Login
//       </Text>
//     </ScrollView>
//   );
// };

// export default Signup;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   title: {
//     fontSize: 30,
//     color: 'black',
//     alignSelf: 'center',
//     marginTop: 100,
//     fontWeight: '600',
//   },
//   input: {
//     width: '90%',
//     height: 50,
//     borderWidth: 0.5,
//     borderRadius: 10,

//     alignSelf: 'center',
//     paddingLeft: 20,
//   },
//   btn: {
//     width: '90%',
//     height: 50,
//     borderRadius: 10,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 50,
//     backgroundColor: '#000',
//   },
//   btnText: {
//     color: 'white',
//     fontSize: 20,
//   },
//   orLogin: {
//     alignSelf: 'center',
//     marginTop: 50,
//     fontSize: 20,
//     textDecorationLine: 'underline',
//     fontWeight: '600',
//     color: 'black',
//   },
// });
