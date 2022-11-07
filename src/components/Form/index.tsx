import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
export default function Form() {
  return (
    <View style={styles.form}>
      <TextInput 
      style={styles.input}
       placeholder='Adicione uma nova tarefa'  placeholderTextColor="#808080"/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}