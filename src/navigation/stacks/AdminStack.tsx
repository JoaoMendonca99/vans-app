import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AdminStackParamList } from '../../utils/types';
import SettingsScreen from '../../screens/Common/SettingsScreen';
import { View, Text } from 'react-native';


const Stack = createNativeStackNavigator<AdminStackParamList>();

// Placeholder para as telas de Admin
const AdminPlaceholderScreen = ({ title }: { title: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
    <Text style={{ marginTop: 16, color: 'red' }}>
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
