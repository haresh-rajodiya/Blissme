import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {icons} from '../../../helper/imageConstans';
import {colors} from '../../../helper';
import {hp} from '../../../helper/helper';

const Feedback = () => {
  const [defaultRating, setDefaultRating] = useState('');

  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map(item => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={item <= defaultRating ? icons.star : icons.fillStar}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>{'Star Rating Bar'}</Text>
        <Text style={styles.textStyle}>
          {'How was your experience with us'}
        </Text>
        <Text style={styles.textStyleSmall}>{'Please Rate Us'}</Text>

        <CustomRatingBar />
        {/* <Text style={styles.textStyle}>
          {defaultRating} / {Math.max.apply(null, maxRating)}
        </Text> */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => alert(defaultRating)}>
          <Text style={styles.buttonTextStyle}>{'Get Selected Value'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: 15,
  },
  buttonStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: colors.pink,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: hp(30),
  },
  starImageStyle: {
    width: 50,
    height: 40,
    resizeMode: 'cover',
  },
});

export default Feedback;
