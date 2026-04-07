const AuthHeader = ({ title, subtitle }) => {
  return (
    <>
      <header className="mb-2">
        <div className="flex items-center gap-2.5 text-xl font-semibold text-blue-700 font-logo">
          <img src="/money-wallet.png" alt="wallet" className="w-8 h-8" />
          <span>E-Wallet</span>
        </div>
      </header>

      <h1 className="text-[1.3rem] sm:text-[1.5rem] lg:text-[1.8rem] 2xl:text-[2rem] font-medium leading-snug text-neutral-800">
        {title}
      </h1>
      <p className="text-[0.9rem] sm:text-[0.95rem] leading-relaxed text-gray-500 -mt-1">
        {subtitle}
      </p>
    </>
  );
};

export default AuthHeader;
