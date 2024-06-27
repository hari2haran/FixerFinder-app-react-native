import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('About')}>
          <Ionicons name="information-circle-outline" size={24} color="black" />
          <Text style={styles.drawerItemText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Help')}>
          <Ionicons name="help-circle-outline" size={24} color="black" />
          <Text style={styles.drawerItemText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Contact')}>
          <Ionicons name="call-outline" size={24} color="black" />
          <Text style={styles.drawerItemText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color="black" />
          <Text style={styles.drawerItemText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 10,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  drawerItemText: {
    marginLeft: 20,
    fontSize: 16,
    color: 'black',
  },
});

export default CustomDrawerContent;
