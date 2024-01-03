import React, {useState} from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {icons} from '../helper/imageConstans';
import {hp, wp} from '../helper/helper';
import {colors} from '../helper';

export default Radio = ({value, changeValue}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <TouchableOpacity style={radioStyle.btn} onPress={changeValue}>
      {value ? (
        <ImageBackground source={icons.Ellipse} style={radioStyle.tick}>
          {value ? (
            <Image
              source={icons.done}
              style={[
                radioStyle.tick,
                {height: hp(14), width: wp(14), tintColor: colors.white},
              ]}
            />
          ) : null}
        </ImageBackground>
      ) : null}
    </TouchableOpacity>
  );
};

const radioStyle = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: colors.lightgrey,
    borderRadius: 15,
    height: hp(25),
    width: wp(25),
    justifyContent: 'center',
    marginTop: hp(30),
    marginLeft: wp(20),
  },
  tick: {
    height: hp(25),
    width: wp(25),
    tintColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
//     backgroundColor: '#4caf50', // Customize the background color for selected state
//   },
// });
// export default CustomRadioButton;
