import React from 'react';
import { View, Text, Button } from 'react-native';
import { tw } from 'nativewind';

const RegisterScreen = ({ navigation }: any) => {
  return (
    <View style={tw('flex-1 justify-center items-center bg-gray-100')}>
      <Text style={tw('text-2xl mb-4')}>Tela de Registro (Opcional)</Text>
      <Text style={tw('text-center mb-8')}>
        O registro de novos usuários (ADM/Mestre) será feito inicialmente via painel web.
        Esta tela é um placeholder.
      </Text>
      <Button title="Voltar para Login" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RegisterScreen;
