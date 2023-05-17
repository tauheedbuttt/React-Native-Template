import { View, Text } from 'react-native'
import React from 'react'

import { styles, colors } from '../../config/styles'
import { navigate } from '../../navigation/RootNavigation';
import { error, isCloseToBottom } from '../../config/functions';

import Screen from '../../components/Screen'

const HomeScreen = () => {

  return (
    <Screen>
      <View style={styles.screenMargins}>
        <Text>Yo</Text>
      </View>
    </Screen>
  )
}

export default HomeScreen