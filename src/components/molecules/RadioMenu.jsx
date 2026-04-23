/**
 * @typedef {Object} RadioMenuProps
 * @property {Object} paymentMethod - The payment method object containing name and icon.
 * @property {string} paymentMethod.name - The name of the payment method.
 * @property {JSX.Element} paymentMethod.icon - The icon component for the payment method.
 */
/**
 * A RadioMenu component that displays a radio button with an icon and name for a payment method.
 * @param {RadioMenuProps} paymentMethod - The payment method to be displayed in the radio menu.
 * @param {string} name - The name attribute for the radio input, used to group radio buttons together.
 * @param {boolean} [isDefault=false] - Whether this radio menu should be selected by default.
 * @returns {JSX.Element} The rendered RadioMenu component.
 */
function RadioMenu({ name, paymentMethod, isDefault = false, register }) {
  return (
    <label className="flex items-center gap-3 px-4 py-3 bg-gray-50 border-[1.5px] border-transparent rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-100 hover:border-gray-200 has-checked:bg-blue-600/4 has-checked:border-blue-600 sm:px-5 sm:py-3.5 sm:gap-4 md:px-6 md:py-4 2xl:px-7 2xl:py-lg">
      <input
        type="radio"
        name={name}
        className="hidden"
        defaultChecked={isDefault}
        value={paymentMethod.value}
        {...register(name, { required: paymentMethod.errorMessage })}
      />
      <span className="relative shrink-0 inline-block w-5 h-5 border-2 border-gray-500 rounded-full transition-colors duration-200 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2.5 after:h-2.5 after:bg-blue-600 after:rounded-full after:opacity-0 [[type=radio]:checked+&]:border-blue-600 [[type=radio]:checked+&]:after:opacity-100"></span>
      <paymentMethod.icon />
      <span className="text-sm font-medium text-neutral-800 sm:text-base">
        {paymentMethod.name}
      </span>
    </label>
  );
}

export default RadioMenu;
