// src/theme/theme.ts
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007AFF',   // azul principal
    secondary: '#FF9500', // laranja de destaque (MD3 usa "secondary")
    // demais cores seguem do tema padrão
  },
};
