import React from 'react';
import {StyleSheet, View} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
const ImageBackgroundView = ({children}) => {
  return (
    <View style={styles.container}>
      {/* <LinearGradient colors={['#292828', '#635d5c']} style={styles.gradient}> */}
      {children}
      {/* </LinearGradient> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ImageBackgroundView;
