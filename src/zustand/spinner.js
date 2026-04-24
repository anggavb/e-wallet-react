import { create } from "zustand";

const useSpinnerStore = create((set) => ({
  isLoading: false,
  toggleSpinner: () => set(state => ({ isLoading: !state.isLoading })),
}));

export default useSpinnerStore;