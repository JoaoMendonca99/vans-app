import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GuardianTabParamList } from '../../utils/types';
import TodayConfirmScreen from '../../screens/Guardian/TodayConfirmScreen';
import ETAViewScreen from '../../screens/Guardian/ETAViewScreen';
import ChatScreen from '../../screens/Guardian/ChatScreen';
import SettingsScreen from '../../screens/Common/SettingsScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<GuardianTabParamList>();

const GuardianTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
      }}
    >
      <Tab.Screen
        name="TodayConfirm"
        component={TodayConfirmScreen}
        options={{
          title: 'Confirmar Hoje',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-check" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ETAView"
        component={ETAViewScreen}
        options={{
          title: 'Ver Rota',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-clock" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="GuardianChat"
        component={ChatScreen}
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="GuardianSettings"
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

export default GuardianTabs;
