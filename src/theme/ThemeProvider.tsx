/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type RootState, type AppDispatch } from '@redux/store.ts';
import App from '@/App.tsx';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { lightMuiTheme, darkMuiTheme, rainbowMuiTheme } from '@theme/muiThemes.ts';

const ThemedApp = () => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  // const dispatch = useDispatch<AppDispatch>(); // Keep if you need to dispatch from here

  // useEffect(() => {
  //   // Initial theme is already set by getInitialTheme in themeSlice.ts
  //   // If you had an explicit initializeTheme action, you'd dispatch it here.
  //   // dispatch(initializeTheme());
  // }, [dispatch]);

  useEffect(() => {
    document.body.setAttribute('data-theme', themeMode);

    // Specific style handling for body for rainbow, others are handled by CSS data-theme.
    // MUI's CssBaseline with custom overrides will also attempt to set body background for rainbow.
    // Ensure there are no conflicts or that the desired method takes precedence.
    // The `data-theme` CSS for rainbow specifically sets `background-image`.
    if (themeMode === 'rainbow') {
        document.body.style.backgroundImage = 'var(--gradient-rainbow)';
        document.body.style.backgroundAttachment = 'fixed';
    } else {
        // Clear inline styles if switching away from rainbow to let CSS variables take over
        document.body.style.backgroundImage = '';
        document.body.style.backgroundAttachment = '';
        // The background-color will be set by the data-theme CSS rules.
    }

  }, [themeMode]);

  const muiTheme = useMemo(() => {
    switch (themeMode) {
      case 'light':
        return lightMuiTheme;
      case 'dark':
        return darkMuiTheme;
      case 'rainbow':
        return rainbowMuiTheme;
      default:
        console.warn(`Unknown theme mode: ${themeMode}, defaulting to light.`);
        return lightMuiTheme;
    }
  }, [themeMode]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      {/* CssBaseline applies baseline styles and respects MUI theme's background/text.
          For the rainbow theme, we added a MuiCssBaseline override for body background.
      */}
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  );
};

export default ThemedApp;