import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SvgXml } from 'react-native-svg';

// config
import { colors, styles } from '../../config/styles'
import { svgs } from '../../config/svgs'
import { reset } from '../../navigation/RootNavigation';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      reset('WelcomeScreen')
    }, 2000)
  }, [])
  return (
    <View style={{ ...styles.center, flex: 1, backgroundColor: colors.primary, padding: 25 }}>
      <SvgXml xml={svgs.logo} style={{ marginBottom: 25 }} />
      <Text style={styles.h1}>Chat AI: AI Chatbot</Text>
    </View>
  )
}

export default SplashScreen