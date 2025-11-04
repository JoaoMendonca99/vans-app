import React from 'react';
import { View, Text } from 'react-native';
import { tw } from 'nativewind';

const RouteTodayScreen = () => {
  return (
    <View style={tw('flex-1 justify-center items-center bg-white')}>
      <Text style={tw('text-2xl font-bold')}>Rota de Hoje (Motorista)</Text>
      <Text style={tw('mt-4 text-center')}>
        Lista de pontos com Drag & Drop e navegação para Check-in/out.
      </Text>
      <Text style={tw('mt-2 text-red-500')}>
        TODO: Implementar lista reordenável (react-native-draggable-flatlist) e lógica de skip/check.
      </Text>
    </View>
  );
};

export default RouteTodayScreen;
