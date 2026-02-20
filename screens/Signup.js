import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Signup() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Signup</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="gray" style={styles.icon} />
        <TextInput placeholder="Full Name" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="gray" style={styles.icon} />
        <TextInput placeholder="Email" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.icon} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="person-add-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}> Signup</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10
  },
  icon: {
    marginRight: 8
  },
  input: {
    flex: 1,
    height: 40
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});