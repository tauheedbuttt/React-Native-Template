import { View, Text, TouchableOpacity, ViewStyle, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from '../config/styles'

interface LinkTextProps {
  title: string,
  onPress: () => {},
  loading?: boolean,
  style?: ViewStyle,
  textStyle?: ViewStyle,
}

const LinkText = ({
  title,
  onPress,
  loading,
  style,
  textStyle
}: LinkTextProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...style }} activeOpacity={0.7}>
      {
        loading
          ? <ActivityIndicator size={30} color={styles.link.color} />
          : <Text style={{ ...styles.link, ...textStyle }}>{title}</Text>
      }
    </TouchableOpacity>
  )
}

export default LinkText