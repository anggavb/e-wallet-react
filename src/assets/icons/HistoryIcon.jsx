/**
 * HistoryIcon component that renders the SVG icon for the history menu item.
 * @param {Object} props
 * @param {string} props.className - Additional class names for styling the icon.
 * @returns {JSX.Element}
 */
function HistoryIcon({ className }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M2.90918 3.36365V7H6.54556" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C8.299 2 5.06755 4.01056 3.33839 6.99905" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.0026 6L12.002 12.0044L16.2417 16.2441" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default HistoryIcon