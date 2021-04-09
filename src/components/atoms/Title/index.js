import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const Title = () => (
  <Text style={styles.title}>Bem Vindo de Volta!</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'blue',
  },
});
