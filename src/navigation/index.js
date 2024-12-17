import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Dashboard, Settings, LoginScreen, SignupScreen } from '../features';
import { Dashboard, Settings, LoginScreen, SignupScreen } from '@/features';

const Stack = createNativeStackNavigator();
const RootContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default RootContainer;

const styles = StyleSheet.create({});
