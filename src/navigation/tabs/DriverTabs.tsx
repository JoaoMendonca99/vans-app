import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DriverTabParamList } from '../../utils/types';
import RouteTodayScreen from '../../screens/Driver/RouteTodayScreen';
import MapLiveScreen from '../../screens/Driver/MapLiveScreen';
import SettingsScreen from '../../screens/Common/SettingsScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<DriverTabParamList>();

const DriverTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
      }}
    >
      <Tab.Screen
        name="RouteToday"
        component={RouteTodayScreen}
        options={{
          title: 'Rota de Hoje',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker-path" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MapLive"
        component={MapLiveScreen}
        options={{
          title: 'Mapa',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker-radius" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="DriverSettings"
        component={SettingsScreen}
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DriverTabs;
