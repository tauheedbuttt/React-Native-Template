import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SvgXml } from 'react-native-svg';


import { HomeIcon, svgs } from '../config/svgs';
import { colors, styles } from '../config/styles';

// Navigators
import HomeStack from './HomeStack';

const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tabs.Navigator screenOptions={{
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.border,
      tabBarStyle: styles.tabBarStyle,
      tabBarLabelStyle: styles.tabBarLabel,

      headerShown: false,
      headerShadowVisible: false
    }}>
      <Tabs.Screen name='HomeStack' component={HomeStack} options={{
        tabBarIcon: ({ color }) => <HomeIcon height={20} width={20} color={color} />,
        tabBarLabel: 'Home',
      }} />
    </Tabs.Navigator>
  )
}

export default MainTabs