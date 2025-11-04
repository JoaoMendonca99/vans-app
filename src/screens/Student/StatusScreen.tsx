import React from 'react';
import { View, Text } from 'react-native';
import { tw } from 'nativewind';

const StatusScreen = () => {
  return (
    <View style={tw('flex-1 justify-center items-center bg-white')}>
      <Text style={tw('text-2xl font-bold')}>Status do Aluno</Text>
      <Text style={tw('mt-4 text-center')}>
        Tela de acompanhamento para o aluno (ETA, motorista, status).
      </Text>
      <Text style={tw('mt-2 text-red-500')}>
        TODO: Implementar visualização de status e ETA.
      </Text>
    </View>
  );
};

export default StatusScreen;
