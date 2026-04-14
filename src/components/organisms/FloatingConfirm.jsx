/**
 * Component for a floating confirmation modal.
 * @param {Object} props
 * @param {Boolean} props.open - Whether the modal is open or not
 * @param {String} props.title - Title for modal confirm
 * @param {String} props.messages - Messages for modal confirm
 * @param {Function} props.handleOpen - Function to toggle the modal open state
 * @param {Function} props.handleConfirm - Function to execute on confirmation
 * @returns
 */
const FloatingConfirm = ({
  open = false,
  title = "Confirm Action",
  messages = "Are you sure you want to perform this action?",
  handleOpen,
  handleConfirm = () => {},
}) => {
  return (
    <>
      {open && (
        // Backdrop
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-full max-w-sm p-6 mx-4 bg-white rounded-lg shadow-xl opacity-100">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{messages}</p>

            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={handleOpen}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleConfirm();
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingConfirm;
