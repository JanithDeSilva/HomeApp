import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



//importing login from screens
import Login from './screens/Login';
import Signup from './screens/Signup';
import ResetPassword from './screens/ResetPassword';
import Home from './screens/Home';





export default function App() {
  return <Home/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
