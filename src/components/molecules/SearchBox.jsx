/**
 * SearchBox — input pencarian dengan ikon kaca pembesar.
 * Digunakan di History dan Transfer.
 *
 * @param {Object} props
 * @param {string} [props.placeholder="Search..."] - Placeholder teks.
 * @param {string} [props.className] - Class tambahan untuk wrapper.
 * @returns {JSX.Element}
 */
function SearchBox({ placeholder = "Search...", className = "", ...props }) {
  return (
    <div className={`search-box ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="grow border-none outline-none font-[inherit] text-sm text-neutral-800 bg-transparent"
        {...props}
      />
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 text-gray-400"
      >
        <circle
          cx="9.48856"
          cy="9.48856"
          r="8.98856"
          stroke="#4F5665"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.7402 16.2071L19.2643 19.722"
          stroke="#4F5665"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default SearchBox;
