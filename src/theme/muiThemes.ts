import { createTheme, type ThemeOptions } from '@mui/material/styles';

// Light Theme
export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: { main: '#1976d2', contrastText: '#ffffff' },
    secondary: { main: '#dc004e', contrastText: '#ffffff' },
    background: { default: '#ffffff', paper: '#f5f5f5' },
    text: { primary: '#000000', secondary: 'rgba(0, 0, 0, 0.6)' },
  },
};

// Dark Theme
export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9', contrastText: '#000000' },
    secondary: { main: '#f48fb1', contrastText: '#000000' },
    background: { default: '#121212', paper: '#1e1e1e' },
    text: { primary: '#ffffff', secondary: 'rgba(255, 255, 255, 0.7)' },
  },
};

// Rainbow Theme
export const rainbowThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light', // Base MUI mode on light for component defaults, we'll override background
    primary: { main: '#ff4081', contrastText: '#ffffff' },
    secondary: { main: '#76ff03', contrastText: '#000000' },
    background: {
      default: 'linear-gradient(to right, #ff7e5f, #feb47b, #86a8e7, #91eae4)', // This sets the default for MUI components that use it
      paper: 'rgba(255, 255, 255, 0.85)',
    },
    text: { primary: '#333333', secondary: 'rgba(51, 51, 51, 0.7)' },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({ // Ensure paper stands out on rainbow
          ...(theme.palette.mode === 'light' && (theme.palette.background.default as string).startsWith('linear-gradient') && { // Check if it's our specific rainbow
             // backgroundColor: 'rgba(255, 255, 255, 0.85)', // Already set in palette.background.paper
          }),
        }),
      },
    },
    MuiCssBaseline: { // To ensure body background is handled correctly for rainbow by MUI
      styleOverrides: (themeParam) =>`
        body {
          background-image: ${themeParam.palette.background.default};
          ${(themeParam.palette.background.default as string).startsWith('linear-gradient') ? 'background-attachment: fixed;' : ''}
        }
      `,
    },
  },
};

export const lightMuiTheme = createTheme(lightThemeOptions);
export const darkMuiTheme = createTheme(darkThemeOptions);
export const rainbowMuiTheme = createTheme(rainbowThemeOptions);