import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';
import UpcomingAppointment from '../../../../components/UpcomingAppointment';
import {
  AppointmentCartList,
  PreviousAppointmentList,
} from '../../../../helper/dummyData';
import {commonStyles} from '../../../../helper/commonStyle';
import {hp, wp} from '../../../../helper/helper';
import PreviousAppointment from '../../../../components/PreviousAppointment';
import OrderAppointmentModal from '../../../../components/OrderAppointmentModal';

const OrderAppointment = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <ScrollView style={styles.container}>
      <Text
        style={[
          commonStyles.HeaderText,
          {marginTop: hp(28), marginLeft: wp(16)},
        ]}>
        {'Upcoming Appointment'}
      </Text>
      <TouchableOpacity onPress={toggleModal}>
        <UpcomingAppointment DATA={AppointmentCartList} onPress={toggleModal} />
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        backdropOpacity={1}
        backdropColor="white"
        coverScreen={false}
        onBackdropPress={() => setModalVisible(false)}
        style={{}}>
        <View style={{height: '90%'}}>
          <OrderAppointmentModal DATA={AppointmentCartList} />
        </View>
      </Modal>

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
