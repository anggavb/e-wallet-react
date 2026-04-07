/**
 * A reusable Button component that accepts a variant prop to determine its styling.
 * Uses utility classes defined in globals.css for consistency.
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {"primary"|"secondary"|"success"|"danger"} props.variant - The button variant.
 * @param {string} props.className - Additional classes to override or extend the variant.
 * @param {Object} props.props - Additional props passed to the button element.
 * @returns {JSX.Element}
 */
function Button({ children, variant = "primary", className = "", ...props }) {
  const variants = {
    primary: "btn-primary w-full",
    secondary: "btn-primary w-full bg-gray-700 hover:bg-gray-800 hover:shadow-none",
    success: "btn-primary w-full bg-green-700 hover:bg-green-800 hover:shadow-none",
    danger: "btn-danger",
  };

  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
