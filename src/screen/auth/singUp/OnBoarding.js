import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/Header';
import {colors} from '../../../helper/colors';
import {hp, wp} from '../../../helper/helper';
import {
  BrushBoule,
  FaceWash,
  Face,
  Leg,
  FaceGlow,
} from '../../../../assets/svg/svgImages/svgImage';
import {commonStyles} from '../../../helper/commonStyle';
import Button from '../../../components/common/Button';
import {icons} from '../../../helper/imageConstans';
import RadioButton from '../../../components/RadioButton';
const DATA = [
  {
    id: '0',
    title: 'Beauty',
    icon: <BrushBoule />,
  },
  {
    id: '1',
    title: 'Face Wash',
    icon: <FaceWash />,
  },
  {
    id: '2',
    title: 'Face Massage',
    icon: <Face />,
  },
  {
    id: '3',
    title: 'Leg Massage',
    icon: <Leg />,
  },
  {
    id: '4',
    title: 'Face glow',
    icon: <FaceGlow />,
  },
];
const Item = ({item}) => {
  const [value, setValue] = useState(null);
  return (
    <TouchableOpacity style={[styles.TouchableIconView]}>
      <View style={[styles.IconView]}>{item?.icon}</View>
      <Text style={styles.listTextStyle}>{item?.title}</Text>
    </TouchableOpacity>
  );
};

const OnBoarding = ({navigation}) => {
  // const [radioValue, setRadioValue] = useState(false);
  const {navigate, goBack} = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={styles.headerLeftContainer}
        leftIcon={styles.headerLeftContainer}
        addImage={icons.back}
        title={'Choose your Interests'}
        drawer={() => navigation.goBack()}
      />
      <View style={{marginTop: hp(18)}}>
        <FlatList
          style={styles.listStyle}
          data={DATA}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
          numColumns={'3'}
        />
      </View>
      {/* <RadioButton
        value={radioValue}
        changeValue={() => setRadioValue(!radioValue)}
      /> */}

      <TouchableOpacity
        style={styles.text}
        onPress={() => navigation.navigate('DrawerNavigator')}>
        <Text style={[commonStyles.CommonText, {textAlign: 'center'}]}>
          {'Skip Now'}
        </Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate('DrawerNavigator')}
        style={hp(15)}
        title={'Continue'}
        color={colors.black}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: hp(8),
    backgroundColor: colors.white,
  },
  IconView: {
    borderBlockColor: colors.grey,
    borderWidth: 1,
    borderColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(54.08),
    width: wp(100),
    borderRadius: 3,
  },
  TouchableIconView: {
    borderBlockColor: colors.grey,
    alignItems: 'center',
    height: hp(83),
    width: '33%',
    borderRadius: 3,
    marginTop: hp(31),
  },
  listTextStyle: {
    fontSize: hp(15),
    fontWeight: '700',
    marginTop: hp(8),
    color: colors.grey,
  },
  headerLeftContainer: {
    height: hp(14),
    width: wp(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: hp(307),
    alignSelf: 'center',
  },
});

export default OnBoarding;

// import {Platform, StyleSheet, Text, View, Button,TouchableOpacity} from 'react-native';

// export default class App extends Component {
//   state={
//     backgroundColor: 'black',
//     backgroundColor2: 'black',
//     pressed: false,
//   };

//   changeColor(){
//     if(!this.state.pressed){
//        this.setState({ pressed: true,backgroundColor: 'red', backgroundColor2: 'black'});
//     } else {
//       this.setState({ pressed: false, backgroundColor: 'black' ,backgroundColor2: 'red'});
//     }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//           <TouchableOpacity
//               style={{backgroundColor:this.state.backgroundColor, padding: 15}}
//               onPress={()=>this.changeColor()}
//                 >
//             <Text style={styles.text}>1 Button</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//               style={{backgroundColor:this.state.backgroundColor2, padding: 15}}
//               onPress={()=>this.changeColor()}
//                 >
//             <Text style={styles.text}>2 button!</Text>
//           </TouchableOpacity>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   text:{
//     color:'white'
//     },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
// });
