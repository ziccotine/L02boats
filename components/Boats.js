import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boats = ({ title, description, poster }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>GetABoat - For Sale</Text>
      <Icon name="sailboat" size={30} color="#FFB6C1" style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Image source={poster} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    color: '#FFB6C1',  // baby pink
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: '#D3D3D3',
    textAlign: 'center',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 400, // Square-like dimensions
    borderRadius: 8,
    marginTop: 8,
  },
});

export default Boats;
