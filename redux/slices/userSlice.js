import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchProfileStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchProfileSuccess: (state, action) => {
            state.loading = false;
            state.profile = action.payload;
        },
        fetchProfileError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchProfileStart,
    fetchProfileSuccess,
    fetchProfileError,
} = userSlice.actions;

export default userSlice.reducer;