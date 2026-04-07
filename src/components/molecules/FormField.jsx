/**
 * FormField — wrapper form group standar dengan label, ikon kiri, dan input.
 * Menggantikan pattern berulang di Profile dan TopUp.
 *
 * @param {Object} props
 * @param {string} props.label - Label untuk input.
 * @param {string} props.id - ID untuk input (dihubungkan ke htmlFor label).
 * @param {React.ReactNode} [props.icon] - Ikon di sisi kiri input.
 * @param {string} [props.type="text"] - Tipe input HTML.
 * @param {string} [props.placeholder] - Placeholder input.
 * @param {string} [props.className] - Class tambahan untuk wrapper.
 * @returns {JSX.Element}
 */
function FormField({ label, id, icon, type = "text", placeholder, className = "", ...props }) {
  return (
    <div className={`form-group ${className}`}>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <div className="form-input">
        {icon && <span className="shrink-0 text-gray-400">{icon}</span>}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="input-raw"
          {...props}
        />
      </div>
    </div>
  );
}

export default FormField;
