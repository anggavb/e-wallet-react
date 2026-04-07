/**
 * Pagination — komponen navigasi halaman untuk tabel/list.
 * Digunakan di History.
 *
 * @param {Object} props
 * @param {number} props.total - Total jumlah item.
 * @param {number} props.perPage - Jumlah item per halaman.
 * @param {number} props.current - Halaman saat ini (1-based).
 * @param {function} [props.onChange] - Callback saat halaman berubah.
 * @returns {JSX.Element}
 */
function Pagination({ total, perPage, current, onChange }) {
  const totalPages = Math.ceil(total / perPage);
  const startItem = (current - 1) * perPage + 1;
  const endItem = Math.min(current * perPage, total);

  const handlePage = (page) => {
    if (page < 1 || page > totalPages) return;
    onChange?.(page);
  };

  return (
    <div className="flex flex-col items-start gap-4 mt-6 sm:flex-row sm:justify-between sm:items-center">
      <span className="text-sm text-gray-500">
        Show {startItem}–{endItem} of {total} History
      </span>
      <div className="flex flex-wrap items-center gap-1.5">
        <button
          onClick={() => handlePage(current - 1)}
          disabled={current === 1}
          className="px-3 py-1.5 rounded-md text-sm font-semibold text-neutral-800 transition-all duration-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePage(page)}
            className={`min-w-8 px-2.5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              page === current
                ? "text-white bg-blue-600 font-semibold"
                : "text-gray-500 hover:bg-gray-100 hover:text-neutral-800"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePage(current + 1)}
          disabled={current === totalPages}
          className="px-3 py-1.5 rounded-md text-sm font-semibold text-neutral-800 transition-all duration-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
