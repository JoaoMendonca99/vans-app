import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from '../../hooks/useAuth';

const SettingsScreen = () => {
  const { logout, user } = useAuth();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Configurações</Text>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>Usuário Logado:</Text>
      <Text style={{ marginBottom: 16 }}>{user?.email} (Perfil: {user?.role})</Text>

      <Button title="Sair (Logout)" onPress={logout} />

      <View style={{ marginTop: 32, padding: 16, borderWidth: 1, borderColor: '#d1d5db', borderRadius: 8 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Funcionalidades Pendentes (TODOs):</Text>
        <Text>- Configurações de Notificações</Text>
        <Text>- Atualização de Dados Pessoais</Text>
        <Text>- Debug de Tokens de Push</Text>
      </View>
    </View>
  );
};

export default SettingsScreen;
