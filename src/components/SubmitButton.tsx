import { View, Text, TouchableOpacity, ActivityIndicator, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from '../config/styles'

interface SubmitButtonProps {
  type?: string,
  title?: string,
  onPress: () => {},
  loading?: boolean,
  disabled?: boolean,
  style?: ViewStyle,
  textStyle?: ViewStyle,
  leftIcon?: JSX.Element | JSX.Element[],
}

const SubmitButton = ({
  type = 'primary',
  title,
  onPress,
  loading,
  style,
  textStyle,
  leftIcon,
  disabled
}: SubmitButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles[`${type}Button`], ...style, ...(disabled ? styles.disabledButton : {}) }}
      activeOpacity={0.8}
      disabled={loading || disabled}
    >
      {
        loading
          ? <ActivityIndicator size={27} color={styles[`${type}Text`].color} />
          : <View style={styles.row}>
            <View style={title ? { marginRight: 8 } : null}>
              {leftIcon}
            </View>
            <Text style={{ ...styles[`${type}Text`], ...textStyle }}>{title}</Text>
          </View>
      }
    </TouchableOpacity>
  )
}

export default SubmitButton