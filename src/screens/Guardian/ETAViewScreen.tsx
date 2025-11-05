import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';


const ETAViewScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ padding: 16, textAlign: 'center', backgroundColor: '#dbeafe' }}>
        Visualização da posição da van e ETA (Tempo Estimado de Chegada).
      </Text>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -23.55052, // São Paulo
          longitude: -46.633308,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Text style={{ padding: 16, textAlign: 'center', backgroundColor: '#e5e7eb' }}>
        ETA: 15 minutos (Mock)
      </Text>
    </View>
  );
};

export default ETAViewScreen;
