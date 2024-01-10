import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageBackgroundView from '../../components/SplashImage';
import {icons} from '../../helper/imageConstans';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      checkLogin();
    }, 2000);
  }, []);
  const checkLogin = async () => {
    const id = await AsyncStorage.getItem('USERID');
    if (id !== null) {
      navigation.navigate('LoginScreen');
    } else {
      navigation.navigate('Signup');
    }
  };
  return (
    <>
      <ImageBackgroundView>
        <Image style={styles.logoImage} source={icons.OilMask} />
        <Text style={styles.logoText}>{'  Blissme  '} </Text>
      </ImageBackgroundView>
    </>
  );
};

export default Splash;
const styles = StyleSheet.create({
  logoText: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },
  logoImage: {
    height: '10%',
    width: '20%',
  },
});

// multiple touchable button

// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// const App = () => {
//   const [selectedButtons, setSelectedButtons] = useState([]);
//   const handleButtonPress = (buttonId) => {
//     if (selectedButtons.includes(buttonId)) {
//       setSelectedButtons(selectedButtons.filter(id => id !== buttonId));
//     } else {
//       setSelectedButtons([...selectedButtons, buttonId]);
//     }
//   };
//   return (
//     <View>
//       <TouchableOpacity
//         style={[
//           styles.button,
//           selectedButtons.includes(1) && styles.selectedButton
//         ]}
//         onPress={() => handleButtonPress(1)}
//       >
//         <Text>Button 1</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           styles.button,
//           selectedButtons.includes(2) && styles.selectedButton
//         ]}
//         onPress={() => handleButtonPress(2)}
//       >
//         <Text>Button 2</Text>
//       </TouchableOpacity>
//       {/* Add more buttons as needed */}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   button: {
//     padding: 10,
//     margin: 5,
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   selectedButton: {
//     backgroundColor: 'blue',
//     color: 'white',
//   },
// });
// export default App;

// To set data:import firestore from '@react-native-firebase/firestore';
// // Example data
// const userData = {
//   name: 'John Doe',
//   age: 25,
//   // ... other fields
// };
// // Reference to the collection
// const usersCollection = firestore().collection('users');
// // Add the data to the collection
// usersCollection.add(userData)
//   .then((docRef) => {
//     console.log('Document written with ID: ', docRef.id);
//   })
//   .catch((error) => {
//     console.error('Error adding document: ', error);
//   });To get data:// Example: Fetch all users
// usersCollection.get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error getting documents: ', error);
//   });

// other

// import firestore from '@react-native-firebase/firestore';
// // Add data to Firestore
// const addDataToFirestore = async () => {
//   try {
//     const collectionRef = firestore().collection('yourCollection'); // Replace 'yourCollection' with your actual collection name
//     // Add a document with auto-generated ID
//     await collectionRef.add({
//       key1: 'value1',
//       key2: 'value2',
//       // Add other fields as needed
//     });
//     console.log('Data added to Firestore successfully!');
//   } catch (error) {
//     console.error('Error adding data to Firestore: ', error);
//   }
// };
// // Call the function to add data
// addDataToFirestore();
