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
          ? { ...user, balance: (user.balance || 0) + payload.amount, history: [...(user.history || []), { userId: user.id, type: "top-up", amount: payload.amount, payment_method: payload.payment_method, date: new Date().toISOString() }] }
          : user,
      );
    },
    transfer: (state, { payload }) => {
      const senderIndex = state.users.findIndex((user) => user.id === payload.senderId);
      const recipientIndex = state.users.findIndex((user) => user.id === payload.recipientId);

      if (senderIndex !== -1 && recipientIndex !== -1) {
        const sender = state.users[senderIndex];
        const recipient = state.users[recipientIndex];

        if ((sender.balance || 0) >= payload.amount) {
          state.users[senderIndex] = {
            ...sender,
            balance: (sender.balance || 0) - payload.amount,
            history: [...(sender.history || []), { userId: sender.id, type: "transfer", amount: payload.amount, recipient: recipient.name, date: new Date().toISOString() }],
          };
          state.users[recipientIndex] = {
            ...recipient,
            balance: (recipient.balance || 0) + payload.amount,
            history: [...(recipient.history || []), { userId: recipient.id, type: "receive", amount: payload.amount, sender: sender.name, date: new Date().toISOString() }],
          };
        }
      }
    },
  },
});

export const usersAction = { ...usersSlice.actions };
export default usersSlice.reducer;