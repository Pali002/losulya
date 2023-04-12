/*
* File: App.js
* Author: Zentai Pál
* Copyright: 2023, Zentai Pál
* Group: Szoft-II-N
* Date: 2023-03-27
* Github: https://github.com/Pali002/
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
