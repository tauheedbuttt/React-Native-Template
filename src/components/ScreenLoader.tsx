import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from '../config/styles'

const ScreenLoader = ({color='white'} : {color?: string}) => {
  return (
    <View style={{flex: 1, ...styles.center}}>
      <ActivityIndicator color={color} size={30} />
    </View>
  )
}

export default ScreenLoader