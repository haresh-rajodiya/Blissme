import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import Header from '../../../components/Header';
import {fs, hp, wp} from '../../../helper/helper';
import {icons} from '../../../helper/imageConstans';
import {colors} from 'react-native-swiper-flatlist/src/themes';
import {commonStyles} from '../../../helper/commonStyle';
import Swiper from '../../../components/Swiper';
import ButtonList from '../../../components/common/ButtonList';
import FilterView from '../../../components/common/Filter';
import TopShopList from '../../../components/TopShopList';
import {TopSalonList} from '../../../helper/dummyData';
import FilterModal from '../../../components/common/FilterModal';

const TopSalon = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftContainer={[styles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[styles.headerRightContainer, {height: hp(19)}]}
        addImage={icons.drawer}
        drawer={() => navigation.opeanDrawer()}
        title={'Top Salon'}
        rightContainer={styles.headerRightContainer}
        rightIcon={styles.headerRightContainer}
        rightImage={icons.search}
      />
      <ScrollView>
        <View style={styles.locationView}>
          <TouchableOpacity style={styles.headerRightContainer}>
            <Image
              style={[styles.headerRightContainer]}
              source={icons.location}
            />
          </TouchableOpacity>
          <Text style={[commonStyles.HeaderText, {marginLeft: wp(20)}]}>
            Mong Kok Flower Market
          </Text>
        </View>
        <Swiper />
        <ButtonList onPress={item => navigation.navigate(item.navigateTo)} />

        <FilterView onPress={toggleModal} />

        <Text style={styles.salonHeader}>Top Salon</Text>
        <TopShopList
          DATA={TopSalonList}
          onPress={() => navigation.navigate('SpaDetails')}
          ButtonPress={() => navigation.navigate('Appointment')}
        />
      </ScrollView>
      <Modal
        isVisible={isModalVisible}
        backdropOpacity={1}
        backdropColor="black"
        coverScreen={false}
        onBackdropPress={() => setModalVisible(false)}>
        <View
          style={{height: '80%', marginTop: 'auto', backgroundColor: 'white'}}>
          {/* <OrderAppointmentModal DATA={AppointmentCartList} /> */}
          <FilterModal />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerRightContainer: {
    height: hp(24),
    width: wp(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationView: {
    paddingHorizontal: hp(16),
    flexDirection: 'row',
    marginTop: hp(20),
  },
  salonHeader: {
    fontSize: fs(20),
    fontWeight: '500',
    color: '#000',
    marginLeft: wp(16),
  },
});

export default TopSalon;

// <Modal
//   animationType="slide"
//   transparent={true}
//   visible={this.state.modalVisible}
//   onRequestClose={() => {
//     // this.closeButtonFunction()
//   }}>
//   <View
//     style={{
//       height: '50%',
//       marginTop: 'auto',
//       backgroundColor:'blue'
//     }}>
//     <View style={styles.footer}>
//       <Text style={styles.headerText}>This is Half Modal</Text>
//     </View>
//     <TouchableOpacity
//       style={styles.addButton}
//       onPress={() => {
//         this.setModalVisible(!this.state.modalVisible);
//       }}>
//       <Text style={styles.addButtonText}>Close</Text>
//     </TouchableOpacity>
//   </View>
// </Modal>
