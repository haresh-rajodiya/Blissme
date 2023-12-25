import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../../../components/Header';
import {commonStyles} from '../../../helper/commonStyle';
import {icons} from '../../../helper/imageConstans';
import {fs, hp, wp} from '../../../helper/helper';
import CartProduct from '../../../components/CartProduct';
import {AppointmentCartList, CartProductList} from '../../../helper/dummyData';
import AppointmentCart from '../../../components/AppointnebtCart';
import AddToCartButton from '../../../components/AddToCartButton';

const Cart = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[commonStyles.headerRightIcon]}
        drawer={() => navigation.goBack()}
        addImage={icons.back}
        title={'Cart'}
      />
      <ScrollView>
        <Text
          style={[
            commonStyles.HeaderText,
            {marginTop: hp(15), marginLeft: wp(8)},
          ]}>
          {'Product'}
        </Text>
        <CartProduct DATA={CartProductList} />
        <Text
          style={[
            commonStyles.HeaderText,
            {marginTop: hp(15), marginLeft: wp(8)},
          ]}>
          {'Confirmation Your appointment'}
        </Text>
        <AppointmentCart DATA={AppointmentCartList} />
        <Text
          style={[
            commonStyles.HeaderText,
            {marginTop: hp(25), marginLeft: wp(8)},
          ]}>
          {'Coupon Code'}
        </Text>
        <KeyboardAvoidingView>
          <View
            style={{
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Apply Coupon Code"
              // secureTextEntry={true}
              style={styles.TextInput}
            />
          </View>
        </KeyboardAvoidingView>
        <Text
          style={[
            commonStyles.HeaderText,
            {marginLeft: wp(8), marginTop: hp(30)},
          ]}>
          {'Price Details'}
        </Text>

        <View style={styles.textView}>
          <Text style={styles.detailsText}>{'Skin Radiance Facial'}</Text>
          <Text style={styles.amountText}>
            {'HK$'}
            <Text>{'588'}</Text>
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.detailsText}>
            {
              'Oily, Combination, Sensitive or Acne Prone skin Ainhoa Vitaminal Facial'
            }
          </Text>
          <Text style={styles.amountText}>
            {'HK$'}
            <Text>{'888'}</Text>
          </Text>
        </View>
        <View style={styles.textView}>
          <View>
            <Text style={styles.detailsText}>{'Product'}</Text>
            <Text style={styles.detailsText}>{'(item : 1)'}</Text>
          </View>
          <Text style={styles.amountText}>
            {'HK$'}
            <Text>{'16'}</Text>
          </Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.detailsText}>{'Total'}</Text>
          <Text style={styles.amountText}>
            {'HK$'}
            <Text>{'1492'}</Text>
          </Text>
        </View>
        <View style={{height: hp(150)}}></View>
      </ScrollView>
      <AddToCartButton
        title={'Make Payment'}
        value={'1492'}
        text={'Total'}
        cart={() => navigation.navigate('PaymentMethod')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
  TextInput: {
    width: '95%',
    backgroundColor: '#E9E6E6',
    borderRadius: 5,
    paddingHorizontal: wp(10),
    marginTop: hp(10),
    height: hp(43),
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(8),
    marginTop: hp(14),
  },
  detailsText: {
    fontSize: fs(15),
    fontWeight: '400',
    width: wp(214),
  },
  amountText: {
    fontSize: fs(15),
    fontWeight: '500',
  },
});

export default Cart;

// import create from 'zustand';

// const useCountStore = create((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }));

// function Counter() {
//   const count = useCountStore((state) => state.count);
//   const increment = useCountStore((state) => state.increment);
//   const decrement = useCountStore((state) => state.decrement);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// act-native-mmkv in a React Native component:// Import necessary modules
// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import create from 'zustand';
// import { useStorage } from 'react-native-mmkv';
// // Create Zustand store
// const useStore = create((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }));
// // Create React component
// const DemoComponent = () => {
//   // Use Zustand store
//   const { count, increment, decrement } = useStore();
//   // Use react-native-mmkv storage
//   const { getString, setString } = useStorage();
//   // Demo component UI
//   return (
//     <View>
//       <Text>Count: {count}</Text>
//       <Button title="Increment" onPress={increment} />
//       <Button title="Decrement" onPress={decrement} />
//       {/* MMKV storage demo */}
//       <Text>Stored String: {getString('storedString', 'No value stored')}</Text>
//       <Button
//         title="Store String"
//         onPress={() => setString('storedString', 'Hello from MMKV')}
//       />
//     </View>
//   );
// };
// export default DemoComponent;

// Here's an example:import React, { useState } from 'react';
// import { View, TouchableOpacity, Text } from 'react-native';
// const MultiSelectColorChangeComponent = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const handleItemPress = (itemId) => {
//     if (selectedItems.includes(itemId)) {
//       // Item is selected, so remove it from the selectedItems array
//       setSelectedItems(selectedItems.filter((item) => item !== itemId));
//     } else {
//       // Item is not selected, so add it to the selectedItems array
//       setSelectedItems([...selectedItems, itemId]);
//     }
//   };
//   const getItemStyle = (itemId) => {
//     // Check if the item is selected and return the corresponding styles
//     return {
//       opacity: selectedItems.includes(itemId) ? 0.5 : 1,
//       backgroundColor: selectedItems.includes(itemId) ? 'blue' : 'transparent',
//     };
//   };
//   return (
//     <View>
//       {/* Replace the following with your list of items */}
//       <TouchableOpacity
//         onPress={() => handleItemPress(1)}
//         style={getItemStyle(1)}
//       >
//         <Text>Item 1</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => handleItemPress(2)}
//         style={getItemStyle(2)}
//       >
//         <Text>Item 2</Text>
//       </TouchableOpacity>
//       {/* Add more TouchableOpacity components for additional items as needed */}
//     </View>
//   );
// };
// export default MultiSelectColorChangeComponent;
