import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppointmentDetail from '../../../../components/AppiontmentDetails';

const Canceled = () => {
  return (
    <View style={styles.container}>
      <AppointmentDetail
        headerName={'Chan'}
        service={'Spa'}
        time={'Today, 05:00 PM'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Canceled;
