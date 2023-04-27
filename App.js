import React from 'react'
import { Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './src/navigation/RootNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AuthStack from './src/navigation/AuthStack';
import { persistor, store } from './src/app/store';
import SplashScreen from './src/features/auth/SplashScreen';
import { colors } from './src/config/styles';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
          <AuthStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App;