function PinModal({ isOpen, onNext }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full p-4 bg-black/50 z-1000">
      <div className="w-full max-w-112.5 overflow-hidden bg-white shadow-2xl rounded-2xl">
        <div className="p-5 font-semibold tracking-wide uppercase border-b sm:p-6 border-neutral-200 text-[0.8rem] text-neutral-800">
          TRANSFER TO GHALUH 1
        </div>

        <div className="p-6 sm:py-8 sm:px-10">
          <h2 className="mb-2 text-xl font-semibold sm:text-2xl text-neutral-800">
            Enter Your Pin 👋
          </h2>
          <p className="mb-8 text-sm sm:text-[0.9rem] text-gray-500">
            Enter Your Pin For Transaction
          </p>

          <div className="flex justify-between gap-1 mb-10 sm:gap-2">
            {[1, "", "", "", "", ""].map((val, idx) => (
              <input
                key={idx}
                type="text"
                maxLength="1"
                defaultValue={val}
                readOnly={idx === 0}
                className={`w-9 h-12 sm:w-11 sm:h-14 border-b-2 text-center text-xl sm:text-2xl font-medium outline-none bg-transparent transition-colors focus:border-blue-700 ${val ? "border-blue-700 text-neutral-800" : "border-neutral-200 text-neutral-800"}`}
              />
            ))}
          </div>

          <button
            onClick={onNext}
            className="flex justify-center w-full p-4 text-base font-semibold text-white transition-all duration-200 border-none rounded-lg cursor-pointer bg-blue-700 hover:bg-blue-900 active:scale-[0.98]"
          >
            Next
          </button>

          <div className="mt-6 text-sm text-center sm:text-[0.9rem] text-gray-500">
            <p>
              Forgot Your Pin?{" "}
              <button className="font-medium bg-transparent border-none cursor-pointer text-blue-700 hover:underline">
                Reset
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PinModal;
