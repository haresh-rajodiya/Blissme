import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screen/auth/singIn/Login';
import Signup from '../screen/auth/singUp/Signup';
import Verification from '../screen/auth/Verification';
import SelectCategory from '../screen/auth/singUp/SelectCategory';
import OnBoarding from '../screen/auth/singUp/OnBoarding';
import ClientDashboard from '../screen/tabs/client/ClientDashboard';
import Profile from '../screen/tabs/customer/Profile';
import Orders from '../screen/tabs/customer/Orders';
import NearbyStore from '../screen/tabs/customer/NearbyStore';
import DrawerButton from '../components/DrawerButton';
import BottomNavigator from '../components/BottomNavigator';
import DrawerNavigator from '../components/DrawerNavigator';
import SpaDetails from '../screen/tabs/customer/SpaDetails';
import Appointment from '../screen/tabs/customer/Appointment';
import Cart from '../screen/tabs/customer/Cart';
import PaymentMethod from '../screen/tabs/customer/PaymentMethod';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'LoginScreen'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        <Stack.Screen name="ClientHome" component={ClientDashboard} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="SelectCategory" component={SelectCategory} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="NearbyStore" component={NearbyStore} />
        <Stack.Screen name="Drawer" component={DrawerButton} />
        <Stack.Screen name="SpaDetails" component={SpaDetails} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;