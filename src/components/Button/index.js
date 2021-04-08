import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Button = () => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>ENVIAR</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    width: 327,
    height: 56,
    borderRadius: 36,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
