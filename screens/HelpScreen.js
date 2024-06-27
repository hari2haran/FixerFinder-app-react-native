import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Help</Text>
      <Text style={styles.text}>Contact us at fixerfinder@gmail.com for further assistance.</Text>
      <Text style={styles.question}>Qn: How do I search for services?</Text>
      <Text style={styles.answer}>Ans: Use the search bar at the top to type keywords related to the service you are looking for. The app will display relevant results based on your search terms.</Text>
      <Text style={styles.question}>Qn: Can I filter search results?</Text>
      <Text style={styles.answer}>Ans: Yes, you can filter search results by tapping the filter icon in the search bar. This allows you to refine your search based on various criteria such as availability, location, etc.</Text>
      <Text style={styles.question}>Qn: How do I contact a service provider?</Text>
      <Text style={styles.answer}>Ans: Once you find a service provider you're interested in, simply tap on their listing to view more details. From there, you'll find contact information or a way to directly reach out to them.</Text>
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
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color:'black'
  },
  answer: {
    fontSize: 16,
    marginTop: 5,
    color:'black'
  },
});

export default HelpScreen;
