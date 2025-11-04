import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { useAuth } from '../../hooks/useAuth';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SafeAreaView } from 'react-native-safe-area-context';
import { tw } from 'nativewind';

const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

type LoginForm = z.infer<typeof loginSchema>;

const LoginScreen = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    try {
      await login(data.email, data.password);
    } catch (error: any) {
      Alert.alert('Erro de Login', error.message || 'Ocorreu um erro ao tentar fazer login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={tw('flex-1 justify-center items-center bg-gray-900')}>
      <View style={tw('w-4/5 p-6 bg-white rounded-lg shadow-xl')}>
        <Text style={tw('text-3xl font-bold text-center text-gray-800 mb-8')}>Vans ExpoGo</Text>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={tw('border border-gray-300 p-3 rounded-lg mb-2')}
              placeholder="E-mail"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          )}
        />
        {errors.email && <Text style={tw('text-red-500 mb-2')}>{errors.email.message}</Text>}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={tw('border border-gray-300 p-3 rounded-lg mb-4')}
              placeholder="Senha"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
        />
        {errors.password && <Text style={tw('text-red-500 mb-4')}>{errors.password.message}</Text>}

        <Button
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          loading={loading}
          disabled={loading}
          style={tw('mt-4')}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </Button>
        {loading && <ActivityIndicator style={tw('mt-4')} size="small" />}

        <Text style={tw('text-center text-gray-600 mt-6')}>
          Não tem conta?{' '}
          <Text style={tw('text-blue-500 font-bold')} onPress={() => console.log('Navegar para Registro')}>
            Registre-se
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
