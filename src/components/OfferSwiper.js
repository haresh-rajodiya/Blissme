import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {offerSwiperData} from '../helper/dummyData';
import {fs, hp, wp} from '../helper/helper';
import {colors} from '../helper';

const OfferSwiper = ({title, title1, text}) => {
  const [data, setData] = useState(offerSwiperData);
  const renderItem = ({item}) => {
    return (
      <View>
        <ImageBackground
          style={{
            height: hp(150),
            width: wp(309),
          }}
          source={item['image']}>
          <View style={styles.textView}>
            <Text style={styles.title}>
              {item.title}
              <Text style={styles.offer}>{item.title1}</Text>
            </Text>
            <Text style={styles.title}>{item.text}</Text>
            <TouchableOpacity style={styles.buttonView}>
              <Text style={[styles.title, {fontSize: fs(15)}]}>
                {'Buy Now'}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        layout={'default'}
        data={data}
        sliderWidth={0}
        itemWidth={wp(300)}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: hp(30),
    width: '100%',
    height: hp(186),
  },
  title: {
    fontSize: fs(20),
    fontWeight: '500',
    color: colors.white,
  },
  offer: {
    fontSize: fs(50),
    fontWeight: '900',
    color: colors.pink,
  },
  textView: {
    marginTop: hp(28),
    marginLeft: wp(17),
  },
  buttonView: {
    height: hp(24),
    width: wp(97),
    backgroundColor: colors.darkPink,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(6),
  },
});

export default OfferSwiper;

//           source={item['image']}>
//           {/* <Text style={{fontSize: 15, fontWeight: '500'}}>{item.title}</Text>
//           <Text>{item.text}</Text> */}
//         </ImageBackground>
//         <Text style={{fontSize: 15, fontWeight: '500', margin: hp(12)}}>
//           {item.title}
//         </Text>
//         <Text style={{fontSize: 15, fontWeight: '500', margin: hp(15)}}>
//           {item.text}
//         </Text>
//       </View>
//     );
//   };
//   return (
//     <View style={styles.container}>
//       <Carousel
//         layout={'default'}
//         data={data}
//         sliderWidth={0}
//         itemWidth={wp(188)}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     marginTop: hp(26),
//     width: wp(360),
//     // alignSelf: 'center',
//     height: hp(205),
//   },
// });

// export default SaloonDetailList;
