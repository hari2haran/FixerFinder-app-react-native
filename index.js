/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';

const Main = () => (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
  
AppRegistry.registerComponent(appName, () => App);
