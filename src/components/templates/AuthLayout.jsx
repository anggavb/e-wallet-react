import React from "react";

const AuthLayout = ({ imageSrc, imageAlt, children }) => {
  return (
    <main className="flex flex-col md:flex-row max-sm:bg-white w-full min-h-screen bg-blue-700">
      {/* Form Panel */}
      <section className="flex items-center justify-center w-full p-6 bg-white md:w-[55%] lg:w-[49%] md:rounded-r-[40px] md:p-10 lg:p-12 xl:p-[3.5rem_2.5rem] 2xl:p-[4rem_3rem]">
        <div className="w-full max-w-134 xl:max-w-140 2xl:max-w-150 flex flex-col gap-4 sm:gap-5">
          {children}
        </div>
      </section>

      {/* Image Panel */}
      <section className="hidden md:flex items-center justify-center w-full md:w-[45%] lg:w-[51%] p-8 relative bg-[radial-gradient(circle_468px_at_center,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-[90%] h-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)]"
        />
      </section>
    </main>
  );
};

export default AuthLayout;
