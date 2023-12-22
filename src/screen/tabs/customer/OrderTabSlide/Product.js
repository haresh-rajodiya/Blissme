import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import OrderProductItem from '../../../../components/OrderProduct';
import {OrderProductData} from '../../../../helper/dummyData';

const OrderProduct = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <OrderProductItem DATA={OrderProductData} onPress={toggleModal} />
      <Modal
        isVisible={isModalVisible}
        backdropOpacity={1}
        backdropColor="white"
        coverScreen={false}
        onBackdropPress={() => setModalVisible(false)}>
        <View style={{height: '90%'}}></View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OrderProduct;
