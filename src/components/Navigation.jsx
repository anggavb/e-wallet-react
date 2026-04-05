import { NavLink } from "react-router"

/**
 * Navigation component for rendering a navigation link with active state styling.
 * @param {Object} props 
 * @param {string} props.to - The destination path for the navigation link.
 * @param {React.ReactNode} props.children - The content to be displayed inside the navigation link.
 * @returns {JSX.Element}
 */
function Navigation({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group flex items-center gap-4 py-3.5 px-5 rounded-lg font-medium transition-all duration-200 ease-in-out ${
          isActive
            ? "bg-blue-700 text-white hover:bg-gray-200 hover:text-blue-700"
            : "text-gray-700 hover:bg-gray-200"
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default Navigation