/**
 * A reusable Button component that accepts a variant prop to determine its styling.
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {string} props.variant - The variant of the button (e.g., "primary", "secondary", "success", "danger").
 * @param {Object} props.props - Additional props to be passed to the button element.
 * @returns {JSX.Element}
 */
function Button({ children, variant = "primary", ...props }) {
  const variants = {
    primary:
      "bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded",
    secondary:
      "bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded",
    success:
      "bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded",
    danger:
      "bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded",
  };

  return (
    <button className={variants[variant]} {...props}>
      {children}
    </button>
  );
}

export default Button;
