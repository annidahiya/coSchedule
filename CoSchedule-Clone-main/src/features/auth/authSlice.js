import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    loggedInUser: {},
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStatus: (state) => {
            state.isLoggedIn = true;
        },
        setUser: (state, { payload }) => {
            state.loggedInUser = payload;
        },
    },
});

export const { loginStatus, setUser } = authSlice.actions;
export default authSlice.reducer;
