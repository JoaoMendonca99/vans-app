import React from 'react';
import { View, Text, Button } from 'react-native';


const RegisterScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f4f6' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Tela de Registro (Opcional)</Text>
      <Text style={{ textAlign: 'center', marginBottom: 32 }}>
        O registro de novos usuários (ADM/Mestre) será feito inicialmente via painel web.
        Esta tela é um placeholder.
      </Text>
      <Button title="Voltar para Login" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RegisterScreen;
