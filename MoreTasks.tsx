import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoreTasks = () => {
  return (
    <View style={styles.container}>
      <Text>Liste des tâches supplémentaires</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default MoreTasks;
