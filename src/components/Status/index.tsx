import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'

type StatusProps = {
  created? : number
  done? : number
}

export default function Status({created, done} : StatusProps) {
  return (
    <View style={styles.statusWrapper}>
      <View style={styles.viewStatus}>
      <Text style={styles.textStatus}>Criadas </Text>
      <Text style={styles.textCounter}>{!created && 0}</Text>
      </View>
      <View style={styles.viewStatus}>
      <Text style={styles.textStatus}>Concluidas </Text>
      <Text style={styles.textCounter}>{!done && 0}</Text>
      </View>
    </View>
  )
}