import React, { useEffect } from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000); // 5 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/FixerFinder.png')} style={styles.image}/>
      <Text style={styles.text}>FixerFinder</Text>
      <Text style={styles.text}>Network of Relaible Workers !!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image:{
        width: 350,
        height: 350,
        borderRadius: 50,
        marginBottom: 10,
        alignSelf: 'center',
        marginTop:2
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
    marginBottom:10,
  },
});

export default SplashScreen;
