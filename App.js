import React from 'react'
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './src/navigation/RootNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AuthStack from './src/navigation/AuthStack';
import { persistor, store } from './src/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>loading...</Text>} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <AuthStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App;