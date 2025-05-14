import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@/reduxAndHooks/store';
import './index.css';
import ThemeProvider from '@/theme/ThemeProvider.tsx';
import { BrowserRouter } from 'react-router-dom'; // Make sure BrowserRouter is imported

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);