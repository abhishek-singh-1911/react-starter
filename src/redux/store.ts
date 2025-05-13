import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@pages/Counter/slice';
// import userReducer from '../features/user/userSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        // user: userReducer,
    },
});

// Infer
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;