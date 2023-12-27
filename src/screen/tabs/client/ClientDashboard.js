import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {fs, hp, wp} from '../../../helper/helper';
import {colors} from '../../../helper';
import ClientHeader from '../../../components/common/ClientHeader';
import {commonStyles} from '../../../helper/commonStyle';
import {icons} from '../../../helper/imageConstans';
import ClientButton from '../../../components/common/ClientButton';
import ClientDetailList from '../../../components/ClientDetailsList';

const ClientDashboard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ClientHeader
        leftContainer={[commonStyles.headerRightContainer, {height: hp(19)}]}
        leftIcon={[
          commonStyles.headerRightContainer,
          {height: hp(19), tintColor: colors.white},
        ]}
        addImage={icons.drawer}
        drawer={() => navigation.goBack()}
        // drawer={() => navigation.openDrawer()}
        title={'Blissme'}
        rightContainer={commonStyles.headerRightContainer}
        rightIcon={[
          commonStyles.headerRightContainer,
          {tintColor: colors.white},
        ]}
        rightImage={icons.notification}
      />
      <View style={styles.upperView}>
        <ClientButton title={'Todays Appointment'} count={'10'} />
        <ClientButton title={'Orders Received'} count={'5'} />
      </View>
      <ClientDetailList
        onPress={item => navigation.navigate(item.navigateBy)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  upperView: {
    height: hp(147),
    backgroundColor: colors.lightgrey,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: wp(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ClientDashboard;
