import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { PermissionsProvider } from './src/context/PernissionsContext';

const AppState = ({ children }: any ) => {

  return (
    <PermissionsProvider>
      { children }
    </PermissionsProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  )
}

export default App
