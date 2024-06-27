import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact</Text>
      <Text style={styles.question}>Email</Text>
      <Text style={styles.answer}>fixerfinder@gmail.com</Text>
      <Text style={styles.question}>Any Queries ?</Text>
      <Text style={styles.answer}>Type your queries below and send us !</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter queries"
        placeholderTextColor="black"
        multiline={true}
      />
      <Button style={styles.button} title="Send" onPress={() => alert('Query sent!')} />
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
    color: 'black',
  },
  button: {
    backgroundColor: '#1E90FF',
    borderRadius:12,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: 'black',
    marginVertical: 20,
    height: 100, // Making the TextInput bigger
    textAlignVertical: 'top', // To align text at the top of TextInput
  },
  answer: {
    fontSize: 16,
    marginTop: 5,
    color: 'black',
  },
});

export default ContactScreen;
