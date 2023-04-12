/*
* File: App.js
* Author: Zentai Pál
* Copyright: 2023, Zentai Pál
* Group: Szoft-II-N
* Date: 2023-03-27
* Github: https://github.com/Pali002/
* Licenc: GNU GPL
*/

import { useState } from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function calcWeight(circuit, lenght) {
  let weight = (circuit * circuit * lenght) / 11877;
  return weight;
}

export default function App() {

  const [circuit, setCircuit] = useState('');
  const [lenght, setLenght] = useState('');
  const [weight, setWeight] = useState('');

  function startCalculation() {
    let weight = calcWeight(circuit, lenght);
    setWeight(weight);
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Feladat 0375</Text>

      <View style={styles.body}>

        <Text style={styles.title}>Ló súlya</Text>
        
        <Text>Mellkas kerülete</Text>
        <TextInput style={styles.input} onChangeText={circuitInput => setCircuit(circuitInput)}/>

        <Text>Hosszúság</Text>
        <TextInput style={styles.input} onChangeText={lenghtInput => setLenght(lenghtInput)}/>

        <Button
        onPress={startCalculation}
        />

        <Text>Súly</Text>
        <TextInput style={styles.input} value={weight}/>
        
      </View>

        <Text style={styles.about}>
          Zentai Pál, Szoft-II-N, 2023-03-27
        </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'black',
    width: '100%',
    height: 30,
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  },
  input: {
    backgroundColor: 'white',
    height: 20,
    width: '100%',
  },
  body: {
    flex: 1,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  about: {
    backgroundColor: 'black',
    textAlign: 'center',
    width: '100%',
    color: 'white'
  }
});
