import { useState } from 'react';
import { usePageTitle } from '@hooks';
import { HistoryIcon } from '@components/atoms/icons';
import { listHistoryTransactions } from '@utils';
import { PageHeader, SearchBox, Pagination } from '@components/molecules';

function History() {
  usePageTitle("History");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className="page-main md:col-span-1 lg:col-span-2">
      <PageHeader icon={<HistoryIcon className="stroke-blue-600" />} title="History Transaction" />

      <section>
        <div className="card p-4 sm:p-8">
          <div className="flex flex-col items-start gap-4 mb-6 sm:flex-row sm:justify-between sm:items-center">
            <h3 className="text-lg font-semibold text-neutral-800">Find Transaction</h3>
            <SearchBox
              placeholder="Enter Number Or Full Name"
              className="w-full sm:w-70 md:w-75"
            />
          </div>

          <div className="flex flex-col">
            {listHistoryTransactions.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 py-3 px-2 border-b border-gray-200 transition-colors duration-150 sm:py-4 sm:px-4 sm:gap-5 ${index % 2 !== 0 ? 'bg-gray-50' : ''} last:border-b-0`}
              >
                <img src={item.photo} alt={item.name} className="shrink-0 object-cover w-10 h-10 rounded-lg sm:w-11 sm:h-11" />
                <span className="flex-1 font-medium text-base text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</span>
                <span className="hidden flex-1 text-sm text-gray-500 sm:block">{item.phone}</span>
                <span className={`font-semibold text-sm whitespace-nowrap ${item.isTransfer ? 'text-green-500' : 'text-red-500'}`}>{item.amount}</span>
                <button className="flex items-center justify-center shrink-0 p-1.5 transition-colors rounded-md group hover:bg-red-100" title="Delete">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5">
                    <path d="M20.25 5.25L3.75 5.25001" stroke="#4F5665" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.75 9.75V15.75" stroke="#D00000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.25 9.75V15.75" stroke="#D00000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25" stroke="#D00000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V5.25" stroke="#D00000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <Pagination
            total={100}
            perPage={listHistoryTransactions.length}
            current={currentPage}
            onChange={setCurrentPage}
          />
        </div>
      </section>
    </main>
  );
}

export default History;