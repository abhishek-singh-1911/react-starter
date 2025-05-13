import { useSelector, useDispatch } from 'react-redux';
import { type RootState, type AppDispatch } from './redux/store';
import { setTheme, type ThemeMode } from '@theme/themeSlice';
import { Button, Box, Typography, Paper, AppBar, Toolbar, Container } from '@mui/material';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const currentThemeMode = useSelector((state: RootState) => state.theme.mode);

  const handleThemeChange = (theme: ThemeMode) => {
    dispatch(setTheme(theme));
  };

  return (
    <>
      {/* AppBar using MUI (will be themed) */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Themed App
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              color="inherit"
              variant={currentThemeMode === 'light' ? 'outlined' : 'text'}
              onClick={() => handleThemeChange('light')}
            >
              Light
            </Button>
            <Button
              color="inherit"
              variant={currentThemeMode === 'dark' ? 'outlined' : 'text'}
              onClick={() => handleThemeChange('dark')}
            >
              Dark
            </Button>
            <Button
              color="inherit"
              variant={currentThemeMode === 'rainbow' ? 'outlined' : 'text'}
              onClick={() => handleThemeChange('rainbow')}
            >
              Rainbow
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main content area */}
      {/* This outer div will have its background controlled by the body's data-theme */}
      <div className="min-h-screen pt-8 pb-8"> {/* Tailwind class for min height and padding */}
        <Container maxWidth="md">
          {/* Paper component using MUI (themed) and Tailwind classes */}
          <Paper
            elevation={3}
            // Use Tailwind theme classes which map to CSS variables
            className="p-6 md:p-10 rounded-lg bg-theme-surface text-theme-on-surface"
          >
            <Typography variant="h4" component="h1" gutterBottom className="text-center text-theme-primary">
              Welcome to the Theme Party!
            </Typography>
            <Typography variant="body1" className="text-center mb-6">
              Current theme: <strong className="capitalize">{currentThemeMode}</strong>
            </Typography>

            <Box display="flex" justifyContent="center" gap={2} my={3}>
              <Button
                variant="contained"
                onClick={() => handleThemeChange('light')}
                color="primary" // MUI primary color
                disabled={currentThemeMode === 'light'}
              >
                Set Light
              </Button>
              <Button
                variant="contained"
                onClick={() => handleThemeChange('dark')}
                color="secondary" // MUI secondary color
                disabled={currentThemeMode === 'dark'}
              >
                Set Dark
              </Button>
              <Button
                variant="contained"
                onClick={() => handleThemeChange('rainbow')}
                sx={{ // Custom styles if needed for rainbow button
                  backgroundColor: currentThemeMode === 'rainbow' ? 'primary.main' : undefined,
                  color: currentThemeMode === 'rainbow' ? 'primary.contrastText' : undefined,
                  // Example: Make primary buttons pop more in rainbow
                  // This depends on how you defined rainbowThemeOptions.palette.primary
                }}
                disabled={currentThemeMode === 'rainbow'}
              >
                Set Rainbow
              </Button>
            </Box>

            <div className="mt-8 p-4 border border-theme-on-surface/30 rounded bg-theme-background">
              <p className="text-theme-on-background">This is a paragraph styled with global theme text color.</p>
              <p className="text-theme-primary font-semibold">This text uses the primary theme color (Tailwind).</p>
              <p className="text-theme-secondary italic">This text uses the secondary theme color (Tailwind).</p>
              <Box sx={{ my: 2, p: 2, backgroundColor: 'background.paper', color: 'text.primary', borderRadius: 1 }}>
                  <Typography variant="subtitle1">MUI Themed Box (background.paper)</Typography>
                  <Typography variant="body2" color="text.secondary">Some secondary text inside MUI Box.</Typography>
              </Box>
            </div>
          </Paper>

          <Box sx={{ mt: 4, p: 3, backgroundColor: 'primary.main', color: 'primary.contrastText', borderRadius: 1 }}>
            <Typography variant="h5">MUI Primary Box</Typography>
            <Typography>This box uses MUI's primary color from the current theme.</Typography>
            <Button variant="contained" color="secondary" sx={{mt: 1}}>MUI Secondary Button</Button>
          </Box>

           <Box sx={{ mt: 2, p: 3, bgcolor: 'secondary.main', color: 'secondary.contrastText', borderRadius: 1 }}>
            <Typography variant="h5">MUI Secondary Box</Typography>
            <Typography>This box uses MUI's secondary color from the current theme.</Typography>
          </Box>

          <div className="mt-4 p-4 rounded-md bg-theme-surface text-theme-on-surface shadow-lg">
            <h3 className="text-xl font-bold text-theme-primary">Tailwind Card</h3>
            <p className="mt-2">This card is styled purely with Tailwind utility classes using our theme variables.</p>
            <button className="mt-3 px-4 py-2 bg-theme-primary text-theme-on-primary rounded hover:opacity-90">
              Tailwind Button
            </button>
          </div>

        </Container>
      </div>
    </>
  );
}

export default App;