import React from 'react';
import { View, Text } from 'react-native';
import { tw } from 'nativewind';

const ChatScreen = () => {
  return (
    <View style={tw('flex-1 justify-center items-center bg-white')}>
      <Text style={tw('text-2xl font-bold')}>Chat com Motorista</Text>
      <Text style={tw('mt-4 text-center')}>
        Chat em tempo real (Firestore) entre Responsável/Aluno e Motorista.
      </Text>
      <Text style={tw('mt-2 text-red-500')}>
        TODO: Implementar UI de chat e integração com Firestore.
      </Text>
    </View>
  );
};

export default ChatScreen;
