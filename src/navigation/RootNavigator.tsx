import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from '../hooks/useAuth';
import { RootStackParamList } from '../utils/types';

import AuthStack from './stacks/AuthStack';
import AdminStack from './stacks/AdminStack';
import DriverTabs from './tabs/DriverTabs';
import GuardianTabs from './tabs/GuardianTabs';
import StudentTabs from './tabs/StudentTabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { role, isLoading } = useAuth();

  // determina a tela SEM hooks
  let screenName: keyof RootStackParamList;
  let component: React.ComponentType<any>;

  switch (role) {
    case 'ADM':
      screenName = 'AdminStack';
      component = AdminStack;
      break;
    case 'DRIVER':
      screenName = 'DriverTabs';
      component = DriverTabs;
      break;
    case 'GUARDIAN':
      screenName = 'GuardianTabs';
      component = GuardianTabs;
      break;
    case 'STUDENT':
      screenName = 'StudentTabs';
      component = StudentTabs;
      break;
    default:
      screenName = 'AuthStack';
      component = AuthStack;
      break;
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screenName} component={component} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
