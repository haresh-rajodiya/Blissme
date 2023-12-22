import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import OrderProductItem from '../../../../components/OrderProduct';
import {
  OrderProductData,
  OrderProductModalData,
} from '../../../../helper/dummyData';
import OrderProductModal from '../../../../components/OrderProductModal';
import {colors} from 'react-native-swiper-flatlist/src/themes';

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
        <OrderProductModal DATA={OrderProductModalData} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});

export default OrderProduct;
