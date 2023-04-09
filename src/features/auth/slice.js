import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: {}
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
    user: (state, action) => {
      state.user = action.payload
    }
  },
});

export const { login, logout, user } = authSlice.actions;

export default authSlice.reducer;
