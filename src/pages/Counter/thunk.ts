import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const response = await fetch('/api/user');
    return await response.json();
});