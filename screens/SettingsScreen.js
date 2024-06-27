import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    sound: true,
    language: 'English',
    dataUsage: true,
    locationSettings: false,
    themes: 'Blue',
  });

  const toggleSetting = (key) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: !prevSettings[key],
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <TouchableOpacity style={styles.item} onPress={() => toggleSetting('notifications')}>
        <Icon name="notifications-outline" size={24} color="black" />
        <Text style={styles.text}>Notifications</Text>
        <Text style={settings.notifications ? styles.status : styles.statusOff}>
          {settings.notifications ? 'ON' : 'OFF'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => toggleSetting('darkMode')}>
        <Icon name="moon-outline" size={24} color="black" />
        <Text style={styles.text}>Dark Mode</Text>
        <Text style={settings.darkMode ? styles.status : styles.statusOff}>
          {settings.darkMode ? 'ON' : 'OFF'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => toggleSetting('sound')}>
        <Icon name="volume-high-outline" size={24} color="black" />
        <Text style={styles.text}>Sound</Text>
        <Text style={settings.sound ? styles.status : styles.statusOff}>
          {settings.sound ? 'ON' : 'OFF'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Icon name="language-outline" size={24} color="black" />
        <Text style={styles.text}>Language</Text>
        <Text style={styles.status}>{settings.language}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => toggleSetting('dataUsage')}>
        <Icon name="bar-chart-outline" size={24} color="black" />
        <Text style={styles.text}>Data Usage</Text>
        <Text style={settings.dataUsage ? styles.status : styles.statusOff}>
          {settings.dataUsage ? 'ON' : 'OFF'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => toggleSetting('locationSettings')}>
        <Icon name="location-outline" size={24} color="black" />
        <Text style={styles.text}>Location Settings</Text>
        <Text style={settings.locationSettings ? styles.status : styles.statusOff}>
          {settings.locationSettings ? 'ON' : 'OFF'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Icon name="color-palette-outline" size={24} color="black" />
        <Text style={styles.text}>Themes</Text>
        <Text style={styles.status}>{settings.themes}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 26,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
    color: 'black',
  },
  status: {
    color: 'green',
    fontWeight: 'bold',
  },
  statusOff: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
