import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';
import HelpScreen from './screens/HelpScreen';
import ContactScreen from './screens/ContactScreen';
import SettingsScreen from './screens/SettingsScreen';
import EScreen from './screens/EScreen';
import MScreen from './screens/MScreen';
import DScreen from './screens/DScreen';
import CScreen from './screens/CScreen';
import PScreen from './screens/PScreen';
import CWScreen from './screens/CWScreen';
import PNScreen from './screens/PNScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="About" component={AboutScreen} />
    <Drawer.Screen name="Help" component={HelpScreen} />
    <Drawer.Screen name="Contact" component={ContactScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Electrician" component={EScreen}/>
        <Stack.Screen name="MScreen" component={MScreen}/>
        <Stack.Screen name="DScreen" component={DScreen}/>
        <Stack.Screen name="CScreen" component={CScreen}/>
        <Stack.Screen name="PScreen" component={PScreen}/>
        <Stack.Screen name="CWScreen" component={CWScreen}/>
        <Stack.Screen name="PNScreen" component={PNScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
