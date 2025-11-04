import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StudentTabParamList } from '../../utils/types';
import StatusScreen from '../../screens/Student/StatusScreen';
import ChatScreen from '../../screens/Guardian/ChatScreen'; // Reutilizando o placeholder de Chat
import SettingsScreen from '../../screens/Common/SettingsScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<StudentTabParamList>();

const StudentTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
      }}
    >
      <Tab.Screen
        name="Status"
        component={StatusScreen}
        options={{
          title: 'Status',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bus-marker" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="StudentChat"
        component={ChatScreen}
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="StudentSettings"
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

export default StudentTabs;
