import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  lastId: 0,
};

const usersSlice = createSlice({
  name: "register",
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
    },
    updateUser: (state, { payload }) => {
      const userIndex = state.users.findIndex((user) => user.id === payload.id);
      if (userIndex !== -1) {
        state.users[userIndex] = { ...state.users[userIndex], ...payload };
      }
    },
    updatePassword: (state, { payload }) => {
      console.log('here');
      state.users = state.users.map((user) =>
        user.id === payload.id ? { ...user, password: payload.password } : user,
      );
    },
    updatePin: (state, { payload }) => {
      state.users = state.users.map((user) =>
        user.id === payload.id ? { ...user, pin: payload.pin } : user,
      );
    },
    topUp: (state, { payload }) => {
      state.users = state.users.map((user) =>
        user.id === payload.id
          ? { ...user, balance: (user.balance || 0) + payload.amount, history: [...(user.history || []), { type: "top-up", amount: payload.amount, payment_method: payload.payment_method, date: new Date().toISOString() }] }
          : user,
      );
    },
  },
});

export const usersAction = { ...usersSlice.actions };
export default usersSlice.reducer;