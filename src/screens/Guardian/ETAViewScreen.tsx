import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { tw } from 'nativewind';

const ETAViewScreen = () => {
  return (
    <View style={tw('flex-1')}>
      <Text style={tw('p-4 text-center bg-blue-100')}>
        Visualização da posição da van e ETA (Tempo Estimado de Chegada).
      </Text>
      <MapView
        style={tw('flex-1')}
        initialRegion={{
          latitude: -23.55052, // São Paulo
          longitude: -46.633308,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Text style={tw('p-4 text-center bg-gray-200')}>
        ETA: 15 minutos (Mock)
      </Text>
    </View>
  );
};

export default ETAViewScreen;
