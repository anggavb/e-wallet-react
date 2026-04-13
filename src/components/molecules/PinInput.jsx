/**
 * A component for rendering a pin input field with a specified length.
 * @param {Object} props - The props for the component.
 * @param {number} props.length - The number of input fields to display.
 * @returns {JSX.Element} The rendered pin input component.
 */
const PinInput = ({ length = 6 }) => {
  return (
    <div className="flex justify-between gap-2 mt-6 mb-8 sm:mt-8 sm:mb-12">
      {[...Array(length)].map((_, idx) => (
        <input
          onKeyDown={(e) => {
            if (e.key === "Backspace" && e.target.value === "" && idx > 0) {
              const prevInput = e.target.parentElement.children[idx - 1];
              prevInput.focus();
              prevInput.value = "";
            }
          }}
          onInput={(e) => {
            if (e.target.value && idx < length - 1) {
              const nextInput = e.target.parentElement.children[idx + 1];
              nextInput.focus();
            }
          }}
          key={idx}
          type="password"
          maxLength="1"
          inputMode="numeric"
          autoFocus={idx === 0}
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-8.75 h-10.5 sm:w-10 sm:h-12 md:w-11.25 md:h-13.75 font-bold text-center text-[1.3rem] sm:text-[1.5rem] md:text-[1.8rem] text-neutral-800 bg-transparent border-b-2 outline-none transition-colors duration-300 focus:border-blue-700 border-neutral-200"
        />
      ))}
    </div>
  );
};

export default PinInput;
