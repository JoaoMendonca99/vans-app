import React from 'react';
import { View, Text } from 'react-native';
import { tw } from 'nativewind';

const TodayConfirmScreen = () => {
  return (
    <View style={tw('flex-1 justify-center items-center bg-white')}>
      <Text style={tw('text-2xl font-bold')}>Confirmar Presença (Responsável)</Text>
      <Text style={tw('mt-4 text-center')}>
        Tela para o responsável confirmar se o aluno 'vai hoje' ou não.
      </Text>
      <Text style={tw('mt-2 text-red-500')}>
        TODO: Implementar lógica de Attendance e atualização de rota.
      </Text>
    </View>
  );
};

export default TodayConfirmScreen;
