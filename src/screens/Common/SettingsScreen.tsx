import React from 'react';
import { View, Text, Button } from 'react-native';
import { tw } from 'nativewind';
import { useAuth } from '../../hooks/useAuth';

const SettingsScreen = () => {
  const { logout, user } = useAuth();

  return (
    <View style={tw('flex-1 p-4 bg-white')}>
      <Text style={tw('text-2xl font-bold mb-4')}>Configurações</Text>
      <Text style={tw('text-lg mb-2')}>Usuário Logado:</Text>
      <Text style={tw('mb-4')}>{user?.email} (Perfil: {user?.role})</Text>

      <Button title="Sair (Logout)" onPress={logout} />

      <View style={tw('mt-8 p-4 border border-gray-300 rounded-lg')}>
        <Text style={tw('font-bold mb-2')}>Funcionalidades Pendentes (TODOs):</Text>
        <Text>- Configurações de Notificações</Text>
        <Text>- Atualização de Dados Pessoais</Text>
        <Text>- Debug de Tokens de Push</Text>
      </View>
    </View>
  );
};

export default SettingsScreen;
