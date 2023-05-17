import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors, styles } from '../config/styles'

interface LoaderProps {
  color?: string,
  size?: number,
  loading?: boolean,
  children?: JSX.Element | JSX.Element[]
}

const Loader = ({ color = colors.primary, size = 30, loading, children }: LoaderProps) => {
  return <>
    {
      !loading ? children : (
        <View style={{ flex: 1, ...styles.center }}>
          <ActivityIndicator color={color} size={size} />
        </View>
      )
    }
  </>
}

export default Loader