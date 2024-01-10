import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CouponDetails from '../../../../components/CoupenDetail';
import OfferButton from '../../../../components/OfferButton';
import {hp} from '../../../../helper/helper';
import {colors} from '../../../../helper';
import Feedback from '../../customer/Feedback';

const ActiveTab = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionSelect = option => {
    setSelectedOption(option);
  };
  const renderRadioOptions = options => {
    return options.map(option => (
      <OfferButton
        key={option}
        title={radioOptions}
        height={hp(43)}
        backgroundColor={[]}
        // fill={selectedButtons.includes('3') ? colors.black : colors.grey}
        style={[
          styles.radioButton,
          selectedOption === option && styles.selectedRadioButton,
        ]}
        onPress={() => handleOptionSelect(option)}
      />
    ));
  };
  const radioOptions = ['Save', 'delete'];
  return (
    <View style={styles.container}>
      {/* <CouponDetails /> */}

      <Feedback />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ActiveTab;
