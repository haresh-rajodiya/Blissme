import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../../../components/Header';
import {commonStyles} from '../../../helper/commonStyle';
import {icons} from '../../../helper/imageConstans';
import {fs, hp, wp} from '../../../helper/helper';

const Conditions = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[commonStyles.headerRightContainer, {height: hp(19)}]}
        addImage={icons.drawer}
        drawer={() => navigation.openDrawer()}
        title={'Terms & Conditions'}
      />
      <View style={{marginHorizontal: wp(16), marginTop: hp(20)}}>
        <Text style={styles.text}>
          {
            'Prepayment, Cancellation, No-shows, and Failure in Rescheduling By making a booking with BlissMe App (owned by BlissMe Technology Ltd), you accept and agree to the relevant cancellation policy of BlissMe App, and to any additional terms and conditions of BlissMe App that may apply to your booking, including for services rendered and/or products (such as gift card) offered by BlissMe App. The relevant services terms and conditions of BlissMe App can be obtained in BlissMe App. The general cancellation policy of BlissMe App is made available on our platform during the reservation procedure.'
          }
        </Text>
      </View>
      <View style={{marginHorizontal: wp(16), marginTop: hp(20)}}>
        <Text style={styles.text}>
          {
            ' Note that once booking is made and confirmed by the merchant (Beauty SPA, Saloon, etc.) of which are contracted and agreed with BlissMe App are not eligible for cancellation, refund, including no-show or failure in rescheduling in relation of emergency, unexpected circumstances, such as typhoon, infectious disease occurrence etc.'
          }
        </Text>
      </View>
      <View style={{marginHorizontal: wp(16), marginTop: hp(20)}}>
        <Text style={styles.text}>
          {
            ' In the case of unpunctual on the booking/treatment date, make sure to inform BlissMe App or the merchant directly at least 60 minutes prior to the booking/treatment time, to allow both parties to act flexibly and reschedule the time, if necessary. However, in the case of failure in rescheduling the booking, it is regarded as cancellation by customers request. BlissMe App reserves the right for final decision. BlissMe App does not accept any liability or responsibility for the consequences of your unpunctual or any cancellation or no-show.'
          }
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: '400',
    fontSize: fs(16),
  },
});

export default Conditions;
