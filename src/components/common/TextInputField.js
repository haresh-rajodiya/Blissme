// import React from 'react';
// import {View, StyleSheet, Image, KeyboardAwareScrollView} from 'react-native';
// import {TextField} from 'rn-material-ui-textfield';
// import {colors} from '../../helper/colors';

// const TextInputField = ({label, style, value, setValue}) => {
//   fieldRef = React.createRef();

//   return (
//     <KeyboardAwareScrollView>
//       <TextField
//         style={style}
//         label={label}
//         //   keyboardType="phone-pad"
//         fontSize={15}
//         labelFontSize={18}
//         lineWidth={1}
//         // lineType="solid"
//         baseColor="#000"
//         inputContainerStyle={styles.container}
//         formatText={this.formatText}
//         onSubmitEditing={this.onSubmit}
//         ref={this.fieldRef}
//         value={value}
//         // onSubmitEditing={value => setValue(value)}
//         onChangeText={value => setValue(value)}

//         // inputContainerStyle = {}
//       />
//     </KeyboardAwareScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 0,
//   },
// });
// export default TextInputField;


<TextInput
style={styles.input}
value={value}
autoComplete={autoComplete}
autoCapitalize={autoCapitalize}
placeholder={placeholder}
secureTextEntry={secureTextEntry}
keyboardType={keyboardType}
returnKeyType={returnKeyType}
autoFocus={autoFocus}
onChangeText={onChangeText}
onSubmitEditing={onSubmitEditing}
multiline={multiline || false}
ref={(r) => { inputRef && inputRef(r); }}
/>


input: {
    paddingRight: 10,
    lineHeight: 23,
    flex: 2,
    textAlignVertical: 'top'
},