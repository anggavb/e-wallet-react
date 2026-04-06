/**
 * TopUpIcon component that renders the SVG icon for the top-up menu item.
 * @param {Object} props
 * @param {string} props.className - Additional class names for styling the icon.
 * @returns {JSX.Element}
 */
function TopUpIcon({ className }) {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_8902_269" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="6" width="20" height="15">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 6.79401H19.9996V20.538H0V6.79401Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_8902_269)">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.565 20.538H4.435C1.99 20.538 0 18.549 0 16.103V11.228C0 8.78301 1.99 6.79401 4.435 6.79401H5.368C5.782 6.79401 6.118 7.13001 6.118 7.54401C6.118 7.95801 5.782 8.29401 5.368 8.29401H4.435C2.816 8.29401 1.5 9.61001 1.5 11.228V16.103C1.5 17.722 2.816 19.038 4.435 19.038H15.565C17.183 19.038 18.5 17.722 18.5 16.103V11.219C18.5 9.60601 17.188 8.29401 15.576 8.29401H14.633C14.219 8.29401 13.883 7.95801 13.883 7.54401C13.883 7.13001 14.219 6.79401 14.633 6.79401H15.576C18.015 6.79401 20 8.77901 20 11.219V16.103C20 18.549 18.01 20.538 15.565 20.538Z" className={className}/>
      </g>
      <mask id="mask1_8902_269" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="9" y="0" width="2" height="14">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.24951 0H10.7495V13.5409H9.24951V0Z" fill="white"/>
      </mask>
      <g mask="url(#mask1_8902_269)">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.99951 13.5409C9.58551 13.5409 9.24951 13.2049 9.24951 12.7909V0.749908C9.24951 0.335908 9.58551 -9.15527e-05 9.99951 -9.15527e-05C10.4135 -9.15527e-05 10.7495 0.335908 10.7495 0.749908V12.7909C10.7495 13.2049 10.4135 13.5409 9.99951 13.5409Z" className={className}/>
      </g>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.08471 4.42859C6.89371 4.42859 6.70171 4.35559 6.55571 4.20959C6.26271 3.91759 6.26071 3.44359 6.55371 3.14959L9.46871 0.221588C9.74971 -0.0614116 10.2497 -0.0614116 10.5307 0.221588L13.4467 3.14959C13.7387 3.44359 13.7377 3.91759 13.4447 4.20959C13.1507 4.50159 12.6767 4.50159 12.3847 4.20759L9.99971 1.81359L7.61571 4.20759C7.46971 4.35559 7.27671 4.42859 7.08471 4.42859Z" className={className}/>
    </svg>
  )
}

export default TopUpIcon