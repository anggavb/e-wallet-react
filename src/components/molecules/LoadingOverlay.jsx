import { SpinnerIcon } from "@components/atoms/icons";

function LoadingOverlay({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-5000 flex items-center justify-center bg-black/70">
      <SpinnerIcon />
    </div>
  );
}

export default LoadingOverlay;
