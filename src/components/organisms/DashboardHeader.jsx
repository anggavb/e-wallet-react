import profile from "@/assets/images/Ellipse 185.png"

/**
 * DashboardHeader component that renders the header for the dashboard layout.
 * @returns {JSX.Element}
 */

function DashboardHeader() {
  return (
    <header className="sticky top-0 z-100 flex items-center justify-between h-14 px-3 py-2 bg-white border-b border-gray-200 sm:h-16 sm:px-4 sm:py-3 md:h-17.5 md:px-8 md:py-4">
      <div className="flex items-center gap-2.5 text-xl font-semibold text-blue-600 font-logo">
        <img src="/money-wallet.png" alt="wallet" width="32" />
        <span>E-Wallet</span>
      </div>
      <div className="relative flex items-center gap-3 cursor-pointer">
        <span className="hidden text-sm font-medium text-gray-500 sm:inline">Ghaluh Wizard</span>
        <img src={profile} alt="Profile" className="w-9 h-9 rounded-full object-cover" />
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 1L7 7L1 1" stroke="#4F5665" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </header>
  )
}

export default DashboardHeader