// App.tsx
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from './src/navigation/RootNavigator';
import { AuthProvider } from './src/hooks/useAuth';  // ✅ caminho correto
import { theme } from './src/theme/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <AuthProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
          <StatusBar style="auto" />
        </AuthProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
