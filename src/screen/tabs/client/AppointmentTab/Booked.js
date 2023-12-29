import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../../helper';
import AppointmentDetail from '../../../../components/AppiontmentDetails';

const Booked = () => {
  return (
    <View style={styles.container}>
      <AppointmentDetail
        headerName={'Santhosh'}
        service={'Hair cut & hair wash'}
        time={'Today, 10:00 AM'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: colors.white,
  },
});

export default Booked;
