import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateInputs = () => {
    if (!name) {
      setErrorMessage('Enter your Name');
      return false;
    }
    if (!email) {
      setErrorMessage('Enter your E-mail id');
      return false;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Enter a valid E-mail id');
      return false;
    }
    if (!gender) {
      setErrorMessage('Select your Gender');
      return false;
    }
    if (!age) {
      setErrorMessage('Enter your Age');
      return false;
    }
    if (!contact) {
      setErrorMessage('Enter your Contact No');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleRegister = () => {
    if (validateInputs()) {
      // Proceed with the registration logic
      Alert.alert('Registration Successful', 'All data entered correctly.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Name"
          value={name}
          onChangeText={setName}
        />
      </View>
      {errorMessage === 'Enter your Name' && <Text style={styles.errorText}>{errorMessage}</Text>}

      <View style={styles.inputContainer}>
        <Text style={styles.label}>EMail:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your E-mail id"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      {(errorMessage === 'Enter your E-mail id' || errorMessage === 'Enter a valid E-mail id') && <Text style={styles.errorText}>{errorMessage}</Text>}

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender:</Text>
        <TouchableOpacity style={styles.radioButton} onPress={() => setGender('male')}>
          <Icon
            name={gender === 'male' ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            style={styles.radioIcon}
          />
          <Text style={styles.radioText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radioButton} onPress={() => setGender('female')}>
          <Icon
            name={gender === 'female' ? 'radio-button-on' : 'radio-button-off'}
            size={20}
            style={styles.radioIcon}
          />
          <Text style={styles.radioText}>Female</Text>
        </TouchableOpacity>
      </View>
      {errorMessage === 'Select your Gender' && <Text style={styles.errorText}>{errorMessage}</Text>}

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
      </View>
      {errorMessage === 'Enter your Age' && <Text style={styles.errorText}>{errorMessage}</Text>}

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contact:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Contact No"
          value={contact}
          onChangeText={setContact}
          keyboardType="phone-pad"
        />
      </View>
      {errorMessage === 'Enter your Contact No' && <Text style={styles.errorText}>{errorMessage}</Text>}

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    width: 80,
    fontSize: 16,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    flex: 1,
    padding: 1,
    fontSize: 16,
    color: 'black',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioIcon: {
    marginRight: 8,
    color: 'black',
  },
  radioText: {
    fontSize: 16,
    color: 'black',
  },
  registerButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignSelf: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default RegisterScreen;
