import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ThemeMode = 'light' | 'dark' | 'rainbow';

interface ThemeState {
  mode: ThemeMode;
}

// Function to get the initial theme from localStorage or default to 'light'
const getInitialTheme = (): ThemeMode => {
  try {
    const storedTheme = localStorage.getItem('themeMode') as ThemeMode | null;
    if (storedTheme && ['light', 'dark', 'rainbow'].includes(storedTheme)) {
      return storedTheme;
    }
  } catch (error) {
    console.error("Could not read theme from localStorage:", error);
  }
  // Check for OS preference if no theme is stored
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light'; // Default theme
};


const initialState: ThemeState = {
  mode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
      try {
        localStorage.setItem('themeMode', action.payload);
      } catch (error) {
        console.error("Could not save theme to localStorage:", error);
      }
    },
    // No explicit initializeTheme needed here if getInitialTheme handles it
    // However, you might want one if you need to re-evaluate OS preference
    // or if getInitialTheme is not called early enough.
    // For now, initial state handles loading from localStorage.
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;