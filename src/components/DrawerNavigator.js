import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomSidebar from './CustomSidebar';
import BottomNavigator from './BottomNavigator';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShow: true,
        drawerStyle: {width: '80%', marginTop: 20},
        drawerType: 'front',
      }}
      drawerContent={props => <CustomSidebar {...props} />}>
      <Drawer.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
