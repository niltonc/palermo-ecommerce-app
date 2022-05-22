import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';

import themes from 'src/styles/themes';
import Routes from 'src/routes'

export default function App() {

  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || theme.light;

  return (
    <ThemeProvider theme={theme}>
    <Routes/>
    </ThemeProvider>
  );
}