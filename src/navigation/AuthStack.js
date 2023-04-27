import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Navigators
import MainTabs from './MainTabs';

// Screens
import SplashScreen from '../features/auth/SplashScreen';
import WelcomeScreen from '../features/auth/WelcomeScreen';
import LoginScreen from '../features/auth/LoginScreen';
import SignupScreen from '../features/auth/SignupScreen';

const Stack = createStackNavigator();

import useAuth from '../hooks/useAuth';
const AuthStack = () => {
  const { user } = useAuth();
  return Object.keys(user).length != 0 ? <MainTabs /> : (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false, animationEnabled: false }}>
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='SignupScreen' component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name='MainTabs' component={MainTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthStack