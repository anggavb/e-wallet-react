import spinner from "@/zustand/spinner";

const useLoadSpinner = () => {
  const { toggleSpinner } = spinner((state) => state);

  const toggle = () => {
    toggleSpinner();

    setTimeout(() => {
        toggleSpinner();
      }, 1000);
  };
  
  return toggle;
};

export default useLoadSpinner;