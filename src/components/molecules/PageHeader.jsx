/**
 * PageHeader — heading standar semua halaman admin.
 * Menampilkan ikon (opsional) di sebelah kiri judul berwarna biru.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.icon - Ikon yang ditampilkan sebelum title.
 * @param {string} props.title - Judul halaman.
 * @param {string} [props.className] - Class tambahan untuk wrapper.
 * @returns {JSX.Element}
 */
function PageHeader({ icon, title, className = "" }) {
  return (
    <div className={`mb-4 sm:mb-6 ${className}`}>
      <h2 className="page-title">
        {icon}
        {title}
      </h2>
    </div>
  );
}

export default PageHeader;
