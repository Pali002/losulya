/*
* File: Button.js
* Author: Zentai Pál
* Copyright: 2023, Zentai Pál
* Group: Szoft-II-N
* Date: 2023-04-12
* Github: https://github.com/Pali002/
* Licenc: GNU GPL
*/

import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

const Button = (props) => {
  return (

    <TouchableHighlight style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>Számít</Text>
    </TouchableHighlight>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 5,
        marginTop: 10,
        width: '15%',
        textAlign: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    }
})