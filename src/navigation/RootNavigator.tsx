import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../hooks/useAuth';
import { RootStackParamList } from '../utils/types';
import AuthStack from './stacks/AuthStack';
import DriverTabs from './tabs/DriverTabs';
import GuardianTabs from './tabs/GuardianTabs';
import StudentTabs from './tabs/StudentTabs';
import { ActivityIndicator, View } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { role, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {role ? (
        <>
          {role === 'ADM' && (
            <Stack.Screen name="AdminStack" component={AdminStack} /> // Usando AuthStack como placeholder para AdminStack
          )}
          {role === 'DRIVER' && (
            <Stack.Screen name="DriverTabs" component={DriverTabs} />
          )}
          {role === 'GUARDIAN' && (
            <Stack.Screen name="GuardianTabs" component={GuardianTabs} />
          )}
          {role === 'STUDENT' && (
            <Stack.Screen name="StudentTabs" component={StudentTabs} />
          )}
        </>
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
