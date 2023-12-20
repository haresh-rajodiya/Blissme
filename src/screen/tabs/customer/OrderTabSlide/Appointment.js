import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import UpcomingAppointment from '../../../../components/UpcomingAppointment';
import {
  AppointmentCartList,
  PreviousAppointmentList,
} from '../../../../helper/dummyData';
import {commonStyles} from '../../../../helper/commonStyle';
import {hp, wp} from '../../../../helper/helper';
import PreviousAppointment from '../../../../components/PreviousAppointment';

const OrderAppointment = () => {
  return (
    <ScrollView style={styles.container}>
      <Text
        style={[
          commonStyles.HeaderText,
          {marginTop: hp(28), marginLeft: wp(16)},
        ]}>
        {'Upcoming Appointment'}
      </Text>
      <TouchableOpacity>
        <UpcomingAppointment DATA={AppointmentCartList} />
      </TouchableOpacity>
      <Text
        style={[
          commonStyles.HeaderText,
          {marginTop: hp(28), marginLeft: wp(16)},
        ]}>
        {'Previous Appointment'}
      </Text>
      <PreviousAppointment DATA={PreviousAppointmentList} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default OrderAppointment;

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Dimensions,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import {LinearGradient} from 'react-native-linear-gradient';
// import {SwiperFlatList} from 'react-native-swiper-flatlist';
// import Modal from 'react-native-modal';
// import UpcommingWeekMeal from './UpcommingWeekMeal';
// import CurrentWeekMeal from './CurruntWeekMeal';
// import WeeklyProgress from './WeeklyProgress';
// import PreFight from './PreFight';
// import Date from './Date';
// const {width} = Dimensions.get('window');
// const HomeScreen = ({navigation}) => {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };
//   return (
//     <LinearGradient
//       start={{x: 1, y: 1}}
//       end={{x: 1, y: 0}}
//       colors={['#18191a', '#6a6c6e', '#18191a']}
//       style={styles.container}>
//       <LinearGradient
//         start={{x: 1, y: 1}}
//         end={{x: 1, y: 0}}
//         colors={['#232324', '#232324', '#136e5b', '#232324', '#232324']}
//         style={{
//           height: 50,
//           backgroundColor: '#242323',
//           flexDirection: 'row',
//         }}>
//         <TouchableOpacity
//           style={{width: 40, height: 40}}
//           onPress={() => navigation.openDrawer()}>
//           <Image
//             style={{height: 30, width: 25, marginLeft: 10, marginVertical: 8}}
//             source={require('../../assets/image/alignleft.png')}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             height: 30,
//             width: 110,
//             marginHorizontal: 107,
//             marginVertical: 8,
//             backgroundColor: 'black',
//             borderRadius: 5,
//           }}
//           onPress={toggleModal}>
//           <Text
//             style={{
//               color: 'white',
//               fontSize: 20,
//               marginLeft: 16,
//             }}>
//             Falcon ▼
//           </Text>
//           <Modal isVisible={isModalVisible}>
//             <View style={{flex: 1}}>
//               <TouchableOpacity
//                 style={{
//                   height: 30,
//                   backgroundColor: '#1b1c1c',
//                   borderRadius: 10,
//                 }}
//                 onPress={toggleModal}>
//                 <Text style={styles.ModalFont}>Coach Selection - 104</Text>
//               </TouchableOpacity>
//               <View style={{flex: 1}}>
//                 <View style={styles.ModalView}>
//                   <View style={{flexDirection: 'row'}}>
//                     <Image
//                       style={[
//                         styles.CommentImage,
//                         {padding: 25, marginTop: 15, marginLeft: 15},
//                       ]}
//                       source={require('../../assets/image/profile.png')}
//                     />
//                     <View>
//                       <Text style={[styles.ModalFont, {marginTop: 15}]}>
//                         Coach Falcon
//                       </Text>
//                       <Text style={[styles.ModalFont, {fontSize: 14}]}>
//                         Boxing
//                       </Text>
//                     </View>
//                     <TouchableOpacity style={[styles.ModalButton]}>
//                       <Text
//                         style={[
//                           styles.ModalFont,
//                           {fontSize: 12, marginLeft: 0},
//                         ]}>
//                         Current Coach
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                   <View
//                     style={{
//                       height: 1,
//                       backgroundColor: 'grey',
//                       marginHorizontal: 10,
//                     }}
//                   />
//                   <View style={{flexDirection: 'row'}}>
//                     <Image
//                       style={[
//                         styles.CommentImage,
//                         {padding: 25, marginTop: 15, marginLeft: 15},
//                       ]}
//                       source={require('../../assets/image/profile.png')}
//                     />
//                     <View>
//                       <Text style={[styles.ModalFont, {marginTop: 15}]}>
//                         Coach John
//                       </Text>
//                       <Text style={[styles.ModalFont, {fontSize: 14}]}>
//                         Wrestling
//                       </Text>
//                     </View>
//                   </View>
//                   <View
//                     style={{
//                       height: 1,
//                       backgroundColor: 'grey',
//                       marginHorizontal: 10,
//                     }}
//                   />
//                   <View style={{flexDirection: 'row'}}>
//                     <TouchableOpacity>
//                       <Image
//                         style={[
//                           styles.CommentImage,
//                           {
//                             padding: 25,
//                             marginTop: 15,
//                             marginLeft: 15,
//                             backgroundColor: 'white',
//                           },
//                         ]}
//                         source={require('../../assets/image/add.png')}
//                       />
//                     </TouchableOpacity>
//                     <TouchableOpacity>
//                       <Text style={[styles.ModalFont, {marginTop: 25}]}>
//                         Add Coach
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               </View>
//             </View>
//           </Modal>
//         </TouchableOpacity>
//       </LinearGradient>
//       <View style={styles.container}>
//         <SwiperFlatList
//           autoplayDelay={2}
//           autoplayLoop
//           index={2}
//           showPagination
//           paginationStyle={{alignItems: 'flex-end'}}
//           paginationStyleItem={{
//             width: 22,
//             height: 5,
//             borderRadius: 5,
//             marginRight: -2,
//           }}
//           paginationStyleItemActive={{
//             backgroundColor: '#00CDCD',
//           }}>
//           <View style={[styles.child, {backgroundColor: '#2d2e2e'}]}>
//             <Date />
//             <UpcommingWeekMeal />
//             <CurrentWeekMeal />

//             <TouchableOpacity
//               style={{
//                 backgroundColor: 'black',
//                 alignItems: 'center',
//                 height: 40,
//                 width: 100,
//                 alignSelf: 'center',
//                 justifyContent: 'center',
//                 marginVertical: 5,
//                 borderRadius: 10,
//               }}>
//               <LinearGradient
//                 start={{x: 1, y: 1}}
//                 end={{x: 1, y: 0}}
//                 colors={['grey', 'black', 'black', 'black', 'black', 'grey']}
//                 style={{
//                   alignItems: 'center',
//                   height: 40,
//                   width: 100,
//                   alignSelf: 'center',
//                   justifyContent: 'center',
//                   borderRadius: 10,
//                 }}>
//                 <Text
//                   style={{
//                     color: 'white',
//                     fontSize: 16,
//                   }}>
//                   Availability
//                 </Text>
//               </LinearGradient>
//             </TouchableOpacity>
//           </View>
//           <View style={[styles.child]}>
//             <WeeklyProgress />
//           </View>
//           <View style={[styles.child]}>
//             <View
//               style={[
//                 styles.container,
//                 {backgroundColor: '#2d2e2e', padding: 0},
//               ]}>
//               <Date />
//               <PreFight btn={'Modrate'} color={'#07cdf5'} />
//               <PreFight btn={'Entance'} color={'#fc7405'} />
//             </View>
//           </View>
//           <View style={[styles.child, {backgroundColor: '#2d2e2e'}]}></View>
//         </SwiperFlatList>
//       </View>
//       <View
//         style={{
//           backgroundColor: 'black',
//           height: 163,
//           borderRadius: 10,
//           margin: 5,
//         }}>
//         <View
//           style={{
//             marginTop: 5,
//             flexDirection: 'row',
//             borderRadius: 5,
//             height: 50,
//             backgroundColor: '',
//           }}>
//           <Image
//             style={styles.CommentImage}
//             source={require('../../assets/image/profile.png')}
//           />
//           <View style={{height: 40}}>
//             <Text
//               style={{
//                 fontSize: 15,
//                 fontWeight: 600,
//                 color: 'white',
//                 padding: 5,
//                 marginLeft: 15,
//               }}>
//               Falcon
//             </Text>
//             <Text
//               style={{
//                 fontSize: 11,
//                 fontWeight: 400,
//                 color: 'white',
//                 marginLeft: 15,
//               }}>
//               1 day ago
//             </Text>
//           </View>
//           <TouchableOpacity style={styles.commentButton2}>
//             <Text style={{fontSize: 15, color: 'white', marginTop: 2.5}}>
//               Button
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <Text
//           style={{
//             fontSize: 15,
//             fontWeight: 400,
//             color: 'white',
//             marginLeft: 5,
//           }}>
//           Event on ( Tournament Date ) with Athletes competing at New boxing
//           center
//         </Text>
//         <View
//           style={{
//             height: 1,
//             backgroundColor: 'grey',
//             marginTop: 5,
//             marginHorizontal: 15,
//           }}
//         />
//         <View style={{flexDirection: 'row', marginTop: 8}}>
//           <Image
//             resizeMode={'contain'}
//             style={{
//               tintColor: '#d1d1cf',
//               height: 15,
//               width: 15,
//               marginLeft: 5,
//               opacity: 200,
//             }}
//             source={require('../../assets/image/comment.png')}
//           />
//           <Text
//             style={{
//               color: 'white',
//               fontSize: 15,
//               marginLeft: 10,
//               marginTop: -1,
//               fontWeight: 400,
//             }}>
//             34 Comment
//           </Text>
//         </View>
//         <View
//           style={{
//             height: 1,
//             backgroundColor: 'grey',
//             marginTop: 2,
//             marginHorizontal: 15,
//           }}
//         />
//         <View>
//           <Text
//             style={{
//               color: 'white',
//               fontSize: 15,
//               marginTop: 5,
//               marginLeft: 5,
//               fontWeight: 400,
//             }}>
//             Add Comment
//           </Text>
//         </View>
//       </View>
//       <View
//         style={{
//           backgroundColor: 'black',
//           margin: 5,
//           borderRadius: 10,
//           height: 120,
//         }}>
//         <View
//           style={{
//             padding: 5,
//             flexDirection: 'row',
//             borderRadius: 5,
//             flex: 0.09,
//           }}>
//           <Image
//             style={styles.CommentImage}
//             source={require('../../assets/image/profile.png')}
//           />
//           <View style={{height: 40}}>
//             <Text
//               style={{
//                 fontSize: 15,
//                 fontWeight: 600,
//                 color: 'white',
//                 padding: 2.5,
//                 marginLeft: 15,
//               }}>
//               Falcon
//             </Text>
//             <Text
//               style={{
//                 fontSize: 11,
//                 fontWeight: 400,
//                 color: 'white',
//                 marginLeft: 15,
//               }}>
//               {' '}
//               1 day ago
//             </Text>
//           </View>
//           <TouchableOpacity style={[styles.commentButton2]}>
//             <Text style={{fontSize: 15, color: 'white', marginTop: 2.5}}>
//               Button
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <Text
//           style={{
//             fontSize: 15,
//             fontWeight: 500,
//             color: 'white',
//             marginTop: 50,
//             marginLeft: 2.5,
//           }}>
//           Videos from yesterday's sparring session
//         </Text>
//         <View
//           style={{
//             height: 1,
//             backgroundColor: 'grey',
//             marginTop: 5,
//             marginHorizontal: 15,
//           }}
//         />
//         <View style={{flexDirection: 'row', marginTop: 10}}>
//           <Image
//             resizeMode={'contain'}
//             style={{
//               tintColor: '#d1d1cf',
//               height: 15,
//               width: 15,
//               marginLeft: 5,
//               opacity: 200,
//             }}
//             source={require('../../assets/image/comment.png')}
//           />
//           <Text
//             style={{
//               color: 'white',
//               fontSize: 15,
//               marginLeft: 10,
//               fontWeight: 400,
//             }}>
//             3 Comment
//           </Text>
//         </View>
//       </View>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   child: {
//     width,
//   },
//   text: {
//     fontSize: width * 0.1,
//     textAlign: 'center',
//   },
//   commentButton2: {
//     height: 25,
//     width: 80,
//     backgroundColor: '#424242',
//     alignItems: 'center',
//     alignVertical: 'center',
//     borderRadius: 5,
//     marginLeft: 180,
//     marginTop: 10,
//     backfaceVisibility: 'visible',
//   },
//   CommentImage: {
//     borderRadius: 50,
//     height: 45,
//     width: 45,
//     marginLeft: 7.5,
//     marginBottom: 20,
//   },
//   upperTextView: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   ModalView: {
//     height: 250,
//     marginHorizontal: 30,
//     backgroundColor: 'black',
//     marginTop: 50,
//     borderRadius: 10,
//   },
//   ModalFont: {
//     color: 'lightgrey',
//     fontSize: 18,
//     marginLeft: 10,
//   },
//   ModalButton: {
//     backgroundColor: '#3c3c3d',
//     width: 95,
//     height: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 5,
//     marginHorizontal: 20,
//     marginTop: 20,
//   },
// });

// export default HomeScreen;
