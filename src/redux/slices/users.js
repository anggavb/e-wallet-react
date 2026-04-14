import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  lastId: 1,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    register: (state, { payload }) => {
      const newUser = {
        id: state.lastId,
        name: payload.name,
        email: payload.email,
        password: payload.password,
      };
      state.users.push(newUser);
      state.lastId++;
    },
  },
});

export const usersAction = { ...usersSlice.actions };
export default usersSlice.reducer;