import React from 'react';
import { View, Text } from 'react-native';


const ChatScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Chat com Motorista</Text>
      <Text style={{ marginTop: 16, textAlign: 'center' }}>
        Chat em tempo real (Firestore) entre Responsável/Aluno e Motorista.
      </Text>
      <Text style={{ marginTop: 8, color: 'red' }}>
        TODO: Implementar UI de chat e integração com Firestore.
      </Text>
    </View>
  );
};

export default ChatScreen;
