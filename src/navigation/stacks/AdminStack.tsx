import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AdminStackParamList } from '../../utils/types';
import SettingsScreen from '../../screens/Common/SettingsScreen';
import { View, Text } from 'react-native';
import { tw } from 'nativewind';

const Stack = createNativeStackNavigator<AdminStackParamList>();

// Placeholder para as telas de Admin
const AdminPlaceholderScreen = ({ title }: { title: string }) => (
  <View style={tw('flex-1 justify-center items-center bg-white')}>
    <Text style={tw('text-2xl font-bold')}>{title}</Text>
    <Text style={tw('mt-4 text-red-500')}>
      TODO: Implementar CRUD completo para esta tela.
    </Text>
  </View>
);

const AdminStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, headerTitleAlign: 'center' }}>
      <Stack.Screen
        name="Users"
        options={{ title: 'Gerenciar Usuários' }}
      >
        {() => <AdminPlaceholderScreen title="Gerenciar Usuários (ADM)" />}
      </Stack.Screen>
      <Stack.Screen
        name="BrandsSchools"
        options={{ title: 'Rotas e Pontos' }}
      >
        {() => <AdminPlaceholderScreen title="Gerenciar Rotas e Pontos (ADM)" />}
      </Stack.Screen>
      <Stack.Screen
        name="DocsFinance"
        options={{ title: 'Documentos e Financeiro' }}
      >
        {() => <AdminPlaceholderScreen title="Documentos e Financeiro (ADM)" />}
      </Stack.Screen>
      <Stack.Screen
        name="AdminSettings"
        component={SettingsScreen}
        options={{ title: 'Configurações' }}
      />
    </Stack.Navigator>
  );
};

export default AdminStack;
