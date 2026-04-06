/**
 * ProfileIcon component that renders the SVG icon for the profile menu item.
 * @param {Object} props
 * @param {string} props.className - Additional class names for styling the icon.
 * @returns {JSX.Element}
 */
function ProfileIcon({ className }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.592 12.707C11.281 12.707 14.434 13.266 14.434 15.499C14.434 17.732 11.302 18.307 7.592 18.307C3.902 18.307 0.75 17.753 0.75 15.519C0.75 13.285 3.881 12.707 7.592 12.707Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.59205 9.52C5.17005 9.52 3.20605 7.557 3.20605 5.135C3.20605 2.713 5.17005 0.75 7.59205 0.75C10.0131 0.75 11.9771 2.713 11.9771 5.135C11.9861 7.548 10.0361 9.511 7.62305 9.52H7.59205Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.4834 8.3818C16.0844 8.1568 17.3174 6.7828 17.3204 5.1198C17.3204 3.4808 16.1254 2.1208 14.5584 1.8638" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5957 12.2324C18.1467 12.4634 19.2297 13.0074 19.2297 14.1274C19.2297 14.8984 18.7197 15.3984 17.8957 15.7114" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default ProfileIcon