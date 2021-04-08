import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Button, Title } from './components';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Title />
      <Button />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});

export default App;
