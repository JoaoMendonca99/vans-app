import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';


const MapLiveScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ padding: 16, textAlign: 'center', backgroundColor: '#fef3c7' }}>
        Apenas simulação/foreground. Rastreamento em segundo plano PROIBIDO no MVP.
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
    </View>
  );
};

export default MapLiveScreen;
