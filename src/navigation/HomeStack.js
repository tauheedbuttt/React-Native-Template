import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import { colors, screenPadding, styles } from '../config/styles';

import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShadowVisible: false,
      headerBackgroundContainerStyle: {
        borderBottomWidth: 1,
        borderBottomLeftRadius: screenPadding,
        borderBottomRightRadius: screenPadding,
        borderColor: colors.border
      }
    }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  )
}

export default HomeStack