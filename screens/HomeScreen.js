import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const services = [
  { title: 'Electrician', name: 'Nizamutheen', location: 'Arappalayam', pay: 'Depends', availability: '9 AM to 5 PM' ,
    email:'nizamutheen@gmail.com',experience:'5 Years',},

  { title: 'Mechanic', name: 'Murugan', location: 'Tirumangalam', pay: 'Depends', availability: '9 AM to 6 PM' ,email:'murugan@gmail.com',experience:'12 Years'},
  { title: 'Driver', name: 'Mohan', location: 'Anna Nagar', pay: 'Depends', availability: '8 AM to 5 PM' ,email:'mohan@gmail.com',experience:'10 Years'},
  { title: 'Carpenter', name: 'Mani', location: 'Pasumalai', pay: 'Depends', availability: '10 AM to 4 PM' ,email:'mani@gmail.com',experience:'7 Years'},
  { title: 'Plumber', name: 'Dinesh', location: 'Goripalayam', pay: 'Depends', availability: '11 AM to 5 PM' ,email:'dinesh@gmail.com',experience:'2 Years'},
  { title: 'Car Wash', name: 'Nithish', location: 'Thirunagar', pay: 'Depends', availability: '8 AM to 6 PM' ,email:'nithish@gmail.com',experience:'3 Years'},
  { title: 'Painter', name: 'Ramachander', location: 'Kappalur', pay: 'Depends', availability: '8 AM to 5 PM' ,email:'ram@gmail.com',experience:'4 Years'},
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = (service) => {
    if (service.title === 'Electrician') {
      navigation.navigate('Electrician', { service });
    }
    if (service.title === 'Mechanic') {
      navigation.navigate('MScreen', { service });
    }
    if (service.title === 'Driver') {
      navigation.navigate('DScreen', { service });
    }
    if (service.title === 'Carpenter') {
      navigation.navigate('CScreen', { service });
    }
    if (service.title === 'Plumber') {
      navigation.navigate('PScreen', { service });
    }
    if (service.title === 'Car Wash') {
      navigation.navigate('CWScreen', { service });
    }
    if (service.title === 'Painter') {
      navigation.navigate('PNScreen', { service });
    }
    
    // Add more navigation cases here for other services
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Ionicons name="menu-outline" size={30} color="black" />
        </TouchableOpacity>
        
        <Text style={styles.headerText}>FIXERFINDER</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search for services near me" placeholderTextColor="gray" />
        <Ionicons name="search-outline" size={24} color="black" />
      </View>
      <ScrollView>
        {services.map((service, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => handlePress(service)}>
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <Text style={styles.cardText}>Name: {service.name}</Text>
            <Text style={styles.cardText}>click for more info !!</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    color: 'black',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  cardText: {
    color: 'black',
  },
});

export default HomeScreen;
