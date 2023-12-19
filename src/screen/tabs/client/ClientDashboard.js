import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fs} from '../../../helper/helper';

const ClientDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: fs(100), color: 'yellow'}}>ClientDashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default ClientDashboard;
