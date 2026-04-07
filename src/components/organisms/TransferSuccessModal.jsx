import { successIllustration } from "@/assets/images";

function TransferSuccessModal({ isOpen, onDone, onTransferAgain }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full p-4 bg-black/50 z-1000">
      <div className="w-full max-w-112.5 overflow-hidden bg-white shadow-2xl rounded-2xl">
        <div className="p-5 font-semibold tracking-wide uppercase border-b sm:p-6 border-neutral-200 text-[0.8rem] text-neutral-800">
          TRANSFER TO GHALUH 1
        </div>

        <div className="p-6 sm:py-8 sm:px-10">
          <div className="flex flex-col items-center text-center">
            <img
              src={successIllustration}
              alt="Success Illustration"
              className="w-55 sm:w-67.5 mb-4"
            />
            <h2 className="mb-2 text-xl font-semibold sm:text-2xl text-neutral-800">
              Yeay Transfer <span className="text-green-500">Success</span>
            </h2>
            <p className="mb-8 text-sm sm:text-[0.9rem] leading-relaxed max-w-70 text-gray-500">
              Thank you for using this application for your financial
            </p>

            <div className="flex flex-col w-full gap-3">
              <button
                onClick={onDone}
                className="flex justify-center w-full p-4 text-base font-semibold text-white transition-all duration-200 border-none rounded-lg cursor-pointer bg-blue-700 hover:bg-blue-900 active:scale-[0.98]"
              >
                Done
              </button>
              <button
                onClick={onTransferAgain}
                className="flex justify-center w-full p-4 text-base font-semibold transition-all duration-200 bg-transparent border border-solid rounded-lg cursor-pointer text-blue-700 border-blue-700 hover:bg-gray-50 active:scale-[0.98]"
              >
                Transfer Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferSuccessModal;
