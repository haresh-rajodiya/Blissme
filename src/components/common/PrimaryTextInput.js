// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   Image,
//   TouchableOpacity,
// } from 'react-native';

// import {icons} from '../../helper/imageConstans';
// import {colors} from '../../helper/colors';

// const PrimaryTextInput = ({
//   placeholder,
//   onChangeText,
//   textInputLabel,
//   value,
//   secureTextEntry,
//   autoFocus,
//   textInputLabelStyle,
//   onPressEye,
//   Password,
// }) => {
//   return (
//     <View style={styles.TextInput}>
//       {textInputLabel ? (
//         <Text style={[styles.textInputLabel, textInputLabelStyle]}>
//           {textInputLabel}
//         </Text>
//       ) : null}
//       <View style={[styles.textInputStyle]}>
//         <TextInput
//           value={value}
//           //   style={{backgroundColor: 'red'}}
//           secureTextEntry={secureTextEntry}
//           //   style={[styles.TextInput]}
//           placeholder={placeholder}
//           placeholderTextColor={colors?.lightgrey}
//           onChangeText={onChangeText}
//           autoFocus={autoFocus}
//           autoCorrect={false}
//         />
//         {Password && (
//           <TouchableOpacity style={styles.eyeView} onPress={onPressEye}>
//             {secureTextEntry === true ? (
//               <Image source={icons.eyeOpen} style={{height: 20, width: 20}} />
//             ) : (
//               <Image source={icons.eyeClose} style={{height: 20, width: 20}} />
//             )}
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   TextInput: {
//     // fontSize: 15,
//     // marginTop: -10,
//     width: '90%',
//     height: 50,
//     marginTop: 25,
//     backgroundColor: colors.lightgrey,
//   },
//   textInputLabel: {
//     fontSize: 15,
//     color: colors.black,
//   },
//   inputView: {
//     height: 50,
//     marginTop: 25,
//     backgroundColor: colors.lightgrey,
//   },
//   eyeView: {
//     alignSelf: 'flex-end',
//     marginBottom: 20,
//   },
//   textInputStyle: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// });

// export default PrimaryTextInput;

import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {hp, wp} from '../../helper/helper';

const PrimaryTextInput = ({style, onChangeText, value}) => {
  return (
    // <View style={styles.container}>
    <TextInput
      style={[styles.TextInput, {marginTop: style}]}
      value={value}
      onChangeText={onChangeText}
    />
    // </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  TextInput: {
    height: hp(43),
    width: '100%',
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
    marginTop: hp(12),
    // marginHorizontal: wp(16),
  },
});

export default PrimaryTextInput;
