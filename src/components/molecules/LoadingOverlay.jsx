import { SpinnerIcon } from "@components/atoms/icons";

function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <SpinnerIcon />
    </div>
  );
}

export default LoadingOverlay;
