const Navbar = () => {
  return (
    <header className="py-4 bg-blue-700 text-white shadow-sm sticky top-0 z-100">
      <div className="container flex items-center justify-between mx-auto max-w-300 px-5">
        <div className="flex items-center gap-2.5 text-xl font-semibold font-logo">
          <img
            src="/money-wallet.png"
            alt="wallet"
            className="w-8 h-8 drop-shadow-sm"
          />
          <span>E-Wallet</span>
        </div>
        <nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="/login"
              className="px-4 py-2 sm:px-6 text-sm font-medium transition-colors border border-white rounded-lg hover:bg-white/10 active:scale-95"
            >
              Sign In
            </a>
            <a
              href="/register"
              className="px-4 py-2 sm:px-6 text-sm font-medium transition-colors bg-white rounded-lg text-blue-700 hover:bg-gray-100 active:scale-95 shadow-sm"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
