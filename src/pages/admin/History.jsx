import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import { usePageTitle } from "@hooks";
import { HistoryIcon } from "@components/atoms/icons";
import { PageHeader, SearchBox, Pagination } from "@components/molecules";
import { formatRupiah } from "@utils";
import { profile } from "@/assets/images";

const PER_PAGE = 5;

function History() {
  usePageTitle("History");

  const { users } = useSelector((state) => state.users);
  const { user: userLoggedIn } = useSelector((state) => state.userLogin);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const [currentPage, setCurrentPage] = useState(1);

  const history =
    userLoggedIn?.history?.map((item) => {
      const user = users.find((u) => u.id === item.userId);
      return {
        ...item,
        name: item.name || (user ? user.name : "Unknown"),
      };
    }) || [];
  const filtered =
    history?.filter((item) => {
      console.log(item);
      const q = query.toLowerCase().trim();
      return (
        item.name.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
      );
    }) || [];

  // Pagination slice dari hasil filter
  const paginated = filtered.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  const handleSearch = (e) => {
    const value = e.target.value;
    // Update URL search param ?q=...
    setSearchParams(value ? { q: value } : {}, { replace: true });
    // Reset ke halaman 1 saat query berubah
    setCurrentPage(1);
  };

  return (
    <main className="page-main md:col-span-1 lg:col-span-2">
      <PageHeader
        icon={<HistoryIcon className="stroke-blue-600" />}
        title="History Transaction"
      />

      <section>
        <div className="card p-4 sm:p-8">
          <div className="flex flex-col items-start gap-4 mb-6 sm:flex-row sm:justify-between sm:items-center">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800">
                Find Transaction
              </h3>
              {query && (
                <p className="mt-1 text-sm text-gray-500">
                  {filtered.length} result{filtered.length !== 1 ? "s" : ""} for
                  &ldquo;
                  <span className="font-medium text-neutral-800">{query}</span>
                  &rdquo;
                </p>
              )}
            </div>
            <SearchBox
              placeholder="Enter Number Or Full Name"
              className="w-full sm:w-70 md:w-75"
              value={query}
              onChange={handleSearch}
            />
          </div>

          <div className="flex flex-col">
            {paginated.length > 0 ? (
              paginated.map((item, index) => (
                <div
                  key={item.name}
                  className={`flex items-center gap-3 py-3 px-2 border-b border-gray-200 transition-colors duration-150 sm:py-4 sm:px-4 sm:gap-5 ${index % 2 !== 0 ? "bg-gray-50" : ""} last:border-b-0`}
                >
                  <img
                    src={item.avatar || profile}
                    alt={item.name}
                    className="shrink-0 object-cover w-10 h-10 rounded-lg sm:w-11 sm:h-11"
                  />
                  <span className="flex-1 font-medium text-base text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.name}
                  </span>
                  <span className="hidden flex-1 text-sm text-gray-500 sm:block">
                    {item.phone ?? item.type}
                  </span>
                  <span
                    className={`font-semibold text-sm whitespace-nowrap ${item.isTransfer ? "text-green-500" : "text-red-500"}`}
                  >
                    {formatRupiah(item.amount)}
                  </span>
                  <button
                    className="flex items-center justify-center shrink-0 p-1.5 transition-colors rounded-md hover:bg-red-100"
                    title="Delete"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4.5 h-4.5"
                    >
                      <path
                        d="M20.25 5.25L3.75 5.25001"
                        stroke="#4F5665"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.75 9.75V15.75"
                        stroke="#D00000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.25 9.75V15.75"
                        stroke="#D00000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25"
                        stroke="#D00000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V5.25"
                        stroke="#D00000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-gray-400 gap-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 11H14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-sm font-medium">
                  No results for &ldquo;{query}&rdquo;
                </p>
              </div>
            )}
          </div>

          <Pagination
            total={filtered.length}
            perPage={PER_PAGE}
            current={currentPage}
            onChange={setCurrentPage}
          />
        </div>
      </section>
    </main>
  );
}

export default History;
