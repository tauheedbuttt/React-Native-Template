import { View, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'

import { styles } from '../config/styles'

interface CounterProps {
  quantity: number,
  onIncrement: () => {},
  onDecrement: () => {},
  stretch?: ViewStyle
}

const Counter = ({quantity, onIncrement, onDecrement, stretch}: CounterProps) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity style={{...styles.counter, ...stretch}} onPress = {onDecrement}>
        <Text style={styles.h2}>-</Text>
      </TouchableOpacity>
      <View style={{marginHorizontal: 10, ...stretch}}> 
        <Text style={styles.h2}>{quantity}</Text>
      </View>
      <TouchableOpacity style={{...styles.counter, ...stretch}} onPress = {onIncrement}>
        <Text style={styles.h2}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Counter