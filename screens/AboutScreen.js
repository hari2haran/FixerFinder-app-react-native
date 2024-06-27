import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About</Text>
      <Text style={styles.text}>This app is built using React Native, a popular framework for building cross-platform mobile applications.</Text>
      <Text style={styles.text}>React Native Version: 0.74.2</Text>
      <Text style={styles.text}>Developers: Jaffar Nisha N, Hari Haran K</Text>
      <Text style={styles.text}>Email: fixerfinder@gmail.com</Text>
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
  text: {
    fontSize: 16,
    marginBottom: 10,
    color:'black'
  },
});

export default AboutScreen;
