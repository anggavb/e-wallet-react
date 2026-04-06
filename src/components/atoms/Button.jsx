/**
 * A reusable Button component that accepts a variant prop to determine its styling.
 * @param {Object} props
 * @param {string} props.variant - The variant of the button (e.g., "primary", "secondary", "success", "danger").
 * @returns {JSX.Element}
 */
function Button({ variant = "primary" }) {
  const variants = {
    primary: "bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded",
    secondary: "bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded",
    success: "bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded",
    danger: "bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded",
  }

  return (
    <button className={variants[variant]}>
      Click Me
    </button>
  )
}

export default Button