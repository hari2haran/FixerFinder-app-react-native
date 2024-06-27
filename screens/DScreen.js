import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DScreen = ({ route }) => {
  const { service } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.outerBorderContainer}>
        <Image source={require('../assets/driver.jpeg')} style={styles.profilePic} />
        <Text style={styles.title}>{service.title}</Text>
        <View style={styles.contentContainer}>
          <View style={styles.detailContainer}>
            <Text style={styles.detail}>Name: {service.name}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detail}>Location: {service.location}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detail}>Pay: {service.pay}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detail}>Availability: {service.availability}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detail}>Email: {service.email}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detail}>Experience: {service.experience}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  outerBorderContainer: {
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center', // Center the content horizontally
    width: '90%', // Set width to maintain inner container's width
  },
  contentContainer: {
    alignItems: 'center', // Center the content horizontally
    width: '100%', // Set width to maintain inner container's width
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  detailContainer: {
    borderWidth: 0.05,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    width: '90%', // Set width to maintain detail container's width
    alignItems: 'center',
  },
  detail: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});

export default DScreen;
