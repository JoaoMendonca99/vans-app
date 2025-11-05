import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { useAuth } from '../../hooks/useAuth';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SafeAreaView } from 'react-native-safe-area-context';


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
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1f2937' }}>
      <View style={{ width: '80%', padding: 24, backgroundColor: 'white', borderRadius: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 6, elevation: 8 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: '#1f2937', marginBottom: 32 }}>Vans ExpoGo</Text>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ borderWidth: 1, borderColor: '#d1d5db', padding: 12, borderRadius: 8, marginBottom: 8 }}
              placeholder="E-mail"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          )}
        />
        {errors.email && <Text style={{ color: '#ef4444', marginBottom: 8 }}>{errors.email.message}</Text>}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ borderWidth: 1, borderColor: '#d1d5db', padding: 12, borderRadius: 8, marginBottom: 16 }}
              placeholder="Senha"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
        />
        {errors.password && <Text style={{ color: '#ef4444', marginBottom: 16 }}>{errors.password.message}</Text>}

        <Button
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          loading={loading}
          disabled={loading}
          style={{ marginTop: 16 }}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </Button>
        {loading && <ActivityIndicator style={{ marginTop: 16 }} size="small" />}

        <Text style={{ textAlign: 'center', color: '#4b5563', marginTop: 24 }}>
          Não tem conta?{' '}
          <Text style={{ color: '#3b82f6', fontWeight: 'bold' }} onPress={() => console.log('Navegar para Registro')}>
            Registre-se
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
