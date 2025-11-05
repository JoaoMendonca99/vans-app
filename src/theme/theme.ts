import { DefaultTheme } from 'react-native-paper';

// Tema base para React Native Paper
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007AFF',   // Azul primário
    accent: '#FF9500',    // Laranja de destaque
    background: '#F2F2F7',// Fundo claro
    surface: '#FFFFFF',   // Superfície de cards/elementos
    text: '#1C1C1E',      // Texto escuro
    error: '#FF3B30',     // Vermelho de erro
  },
};
