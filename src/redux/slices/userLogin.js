import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: 0,
    name: "",
    email: ""
  },
};

const userLoginSlice = createSlice({
  name: "users:login",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user.id = payload.id,
      state.user.name = payload.name,
      state.user.email = payload.email
    },
    logout: (state) => {
      state.user = initialState.user
    }
  },
});

export const userLoginAction = { ...userLoginSlice.actions };
export default userLoginSlice.reducer;