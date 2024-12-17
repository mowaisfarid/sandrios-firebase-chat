import { StyleSheet } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import RootContainer from './navigation';

const App = () => {
  return (
    <NavigationContainer>
      <RootContainer />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
