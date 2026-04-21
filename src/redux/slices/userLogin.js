import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userLoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    updated: (state, { payload }) => {
      state.user = { ...state.user, ...payload }
    },
    logout: (state) => {
      state.user = initialState.user
    }
  },
});

export const userLoginAction = { ...userLoginSlice.actions };
export default userLoginSlice.reducer;