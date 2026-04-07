/**
 * Stepper — komponen multi-step progress yang identik dipakai di Transfer & TransferDetail.
 *
 * @param {Object} props
 * @param {string[]} props.steps - Array nama step (misal: ["Find People", "Set Nominal", "Finish"]).
 * @param {number} props.activeStep - Index step yang sedang aktif (0-based).
 * @returns {JSX.Element}
 */
function Stepper({ steps, activeStep }) {
  return (
    <div className="stepper">
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        return (
          <div key={index} className="contents">
            <div className={`stepper-item ${isActive ? "text-neutral-800" : "text-gray-500"}`}>
              <div className={`stepper-dot ${isActive ? "bg-blue-600" : "bg-gray-500"}`}>
                {index + 1}
              </div>
              <span>{step}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="stepper-divider" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Stepper;
