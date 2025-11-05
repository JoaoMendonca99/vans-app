import React from 'react';
import { View, Text } from 'react-native';


const StatusScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Status do Aluno</Text>
      <Text style={{ marginTop: 16, textAlign: 'center' }}>
        Tela de acompanhamento para o aluno (ETA, motorista, status).
      </Text>
      <Text style={{ marginTop: 8, color: 'red' }}>
        TODO: Implementar visualização de status e ETA.
      </Text>
    </View>
  );
};

export default StatusScreen;
