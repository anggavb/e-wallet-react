import { create } from "zustand";

const useLogoutStore = create((set) => ({
  modalLogout: false,
  title: "Confirm Logout",
  messages: "Are you sure you want to logout?",
  handleConfirm: () => {},
  toggleModalLogout: () => set(state => ({ modalLogout: !state.modalLogout })),
  changeTitle: (newTitle) => set({ title: newTitle }),
  changeMessages: (newMessages) => set({ messages: newMessages }),
  setHandleConfirm: (fn) => set({ handleConfirm: fn }),
}));

export default useLogoutStore;
