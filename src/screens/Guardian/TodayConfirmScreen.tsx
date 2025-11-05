import React from 'react';
import { View, Text } from 'react-native';


const TodayConfirmScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Confirmar Presença (Responsável)</Text>
      <Text style={{ marginTop: 16, textAlign: 'center' }}>
        Tela para o responsável confirmar se o aluno 'vai hoje' ou não.
      </Text>
      <Text style={{ marginTop: 8, color: 'red' }}>
        TODO: Implementar lógica de Attendance e atualização de rota.
      </Text>
    </View>
  );
};

export default TodayConfirmScreen;
