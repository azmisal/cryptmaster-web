import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'dark',
  toggleTheme: () => {},
});

export const useThemeMode = () => useContext(ThemeContext);

interface CustomThemeProviderProps {
  children: React.ReactNode;
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('crypt-master-theme') as ThemeMode;
    if (savedTheme) {
      setMode(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('crypt-master-theme', newMode);
  };

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: 'hsl(271, 91%, 65%)',
        light: 'hsl(271, 91%, 75%)',
        dark: 'hsl(271, 81%, 56%)',
      },
      secondary: {
        main: mode === 'dark' ? 'hsl(218, 23%, 12%)' : 'hsl(210, 40%, 96%)',
      },
      success: {
        main: 'hsl(142, 76%, 36%)',
      },
      warning: {
        main: 'hsl(38, 92%, 50%)',
      },
      error: {
        main: 'hsl(0, 84%, 60%)',
      },
      info: {
        main: 'hsl(217, 91%, 60%)',
      },
      background: {
        default: mode === 'dark' ? 'hsl(218, 23%, 7%)' : 'hsl(45, 25%, 96%)',
        paper: mode === 'dark' ? 'hsl(218, 23%, 9%)' : 'hsl(45, 15%, 92%)',
        pale: mode === 'dark' ? 'hsl(218, 23%, 9%)' : 'hsla(40, 15%, 92%, 0.12)'
      },
      text: {
        primary: mode === 'dark' ? 'hsl(210, 40%, 98%)' : 'hsl(218, 25%, 15%)',
        secondary: mode === 'dark' ? 'hsla(210, 40%, 98%, 0.8)' : 'hsla(218, 25%, 15%, 0.7)',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontFamily: '"Chakra Petch", sans-serif',
        fontWeight: 900,
      },
      h2: {
        fontFamily: '"Chakra Petch", sans-serif',
        fontWeight: 700,
      },
      h3: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 700,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            fontWeight: 600,
            transition: 'all 0.3s ease',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            transition: 'all 0.3s ease',
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};