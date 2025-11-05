import React from 'react';
import { View, Text } from 'react-native';


const RouteTodayScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Rota de Hoje (Motorista)</Text>
      <Text style={{ marginTop: 16, textAlign: 'center' }}>
        Lista de pontos com Drag & Drop e navegação para Check-in/out.
      </Text>
      <Text style={{ marginTop: 8, color: 'red' }}>
        TODO: Implementar lista reordenável (react-native-draggable-flatlist) e lógica de skip/check.
      </Text>
    </View>
  );
};

export default RouteTodayScreen;
