import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from './thunk';

interface UserState {
    data: object | null;
    loading: boolean;
}

const initialState: UserState = {
    data: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchUser.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default userSlice.reducer;