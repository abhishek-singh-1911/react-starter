import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@pages/Counter/slice';
import themeReducer from '@theme/themeSlice';
// import userReducer from '../features/user/userSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
        // user: userReducer,
    },
});

// Infer
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;