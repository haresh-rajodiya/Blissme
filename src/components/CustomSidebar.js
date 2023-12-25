import {View, Text} from 'react-native';
import React from 'react';
import DrawerButton from './DrawerButton';

export default function CustomSidebarMenu({offers, condition, policy, about}) {
  return (
    <View>
      <DrawerButton
        offersScreen={offers}
        terms={condition}
        privacy={policy}
        about={about}
      />
    </View>
  );
}
