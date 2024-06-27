import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('Drawer');
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FixerFinder</Text>
      
      <View style={styles.inputContainer}>
        <Icon name="mail-outline" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor='black'
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock-closed-outline" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor='black'
          secureTextEntry={secureTextEntry}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
          <Icon name={secureTextEntry ? "eye-off-outline" : "eye-outline"} size={20} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <Text style={styles.registerText}>Don't have an account ?</Text>
      
      <TouchableOpacity style={styles.registerButton} onPress={()=>navigation.navigate('Register')}>
        <Text style={styles.registerButtonText}>REGISTER !!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff', // Adjust the background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color:'black'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    width: '100%',
    paddingBottom: 8,
  },
  icon: {
    marginRight: 8,
    color: 'black', // Adjust the icon color
  },
  input: {
    flex: 1,
    fontSize: 16,
    color:'black',
  },
  forgotPassword: {
    color: '#1E90FF',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    fontSize: 16,
    marginBottom: 20,
  },
  registerText: {
    fontSize: 16,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;
