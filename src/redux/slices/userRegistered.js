import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  lastId: 0,
};

const usersSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    register: (state, { payload }) => {
      state.lastId++;
      const newUser = {
        id: state.lastId,
        name: payload.name,
        email: payload.email,
        password: payload.password,
      };
      state.users.push(newUser);
    }
  },
});

export const usersAction = { ...usersSlice.actions };
export default usersSlice.reducer;