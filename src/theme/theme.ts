import { DefaultTheme } from 'react-native-paper';
import { TailwindProvider } from 'nativewind';

// Tema base para React Native Paper
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007AFF', // Azul primário
    accent: '#FF9500', // Laranja de destaque
    background: '#F2F2F7', // Fundo claro
    surface: '#FFFFFF', // Superfície de cards/elementos
    text: '#1C1C1E', // Texto escuro
    error: '#FF3B30', // Vermelho de erro
  },
};

// Configuração do NativeWind (não é um arquivo .ts, mas é importante para o setup)
// O setup do NativeWind é feito no babel.config.js e tailwind.config.js
// Este arquivo é apenas para o tema do Paper.
// Para usar o NativeWind, envolva o componente com <TailwindProvider> se necessário,
// mas o setup no babel.config.js já deve ser suficiente.
