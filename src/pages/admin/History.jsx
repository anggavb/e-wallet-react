import { usePageTitle } from '@hooks';
import { HistoryIcon } from '@components/atoms/icons';
import { listHistoryTransactions } from '@utils';

function History() {
  usePageTitle("History")
  return (
    <main className="md:col-span-1 lg:col-span-2 flex flex-col gap-4 p-3 sm:p-6 sm:gap-6 md:p-8 xl:p-10 2xl:p-12">
          
      <h2 className="flex items-center gap-3 text-base font-semibold text-blue-600 sm:text-lg">
        <HistoryIcon className="stroke-blue-600" />
        History Transaction
      </h2>

      <section>
        <div className="p-4 bg-white border border-gray-200 rounded-xl sm:p-8">
          <div className="flex flex-col items-start gap-4 mb-6 sm:flex-row sm:justify-between sm:items-center">
            <h3 className="text-lg font-semibold text-neutral-800">Find Transaction</h3>
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 w-full sm:w-70 md:w-75">
              <input 
                type="text" 
                placeholder="Enter Number Or Full Name" 
                className="grow border-none outline-none font-inherit text-sm text-neutral-800 bg-transparent" 
              />
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.48856" cy="9.48856" r="8.98856" stroke="#4F5665" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.7402 16.2071L19.2643 19.722" stroke="#4F5665" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            {listHistoryTransactions.map((item, index) => (
              <div key={index} className={`flex items-center gap-3 py-3 px-2 border-b border-gray-200 transition-colors duration-150 sm:py-4 sm:px-4 sm:gap-5 ${index % 2 !== 0 ? 'bg-gray-50' : ''} last:border-b-0`}>
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

          {/* Pagination Footer */}
          <div className="flex flex-col items-start gap-4 mt-6 sm:flex-row sm:justify-between sm:items-center">
            <span className="text-sm text-gray-500">Show 5 History of 100 History</span>
            <div className="flex flex-wrap items-center gap-1.5">
              <button className="px-3 py-1.5 rounded-md text-sm font-semibold text-neutral-800 transition-all duration-200 hover:bg-[#f3f4f6]">Prev</button>
              <button className="min-w-8 px-2.5 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 text-white bg-blue-600">1</button>
              <button className="min-w-8 px-2.5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 text-gray-500 hover:bg-[#f3f4f6] hover:text-neutral-800">2</button>
              <button className="min-w-8 px-2.5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 text-gray-500 hover:bg-[#f3f4f6] hover:text-neutral-800">3</button>
              <button className="min-w-8 px-2.5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 text-gray-500 hover:bg-[#f3f4f6] hover:text-neutral-800">4</button>
              <button className="min-w-8 px-2.5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 text-gray-500 hover:bg-[#f3f4f6] hover:text-neutral-800">5</button>
              <button className="min-w-8 px-2.5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 text-gray-500 hover:bg-[#f3f4f6] hover:text-neutral-800">6</button>
              <button className="min-w-8 px-2.5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 text-gray-500 hover:bg-[#f3f4f6] hover:text-neutral-800">7</button>
              <button className="min-w-8 px-2.5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 text-gray-500 hover:bg-[#f3f4f6] hover:text-neutral-800">8</button>
              <button className="min-w-8 px-2.5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 text-gray-500 hover:bg-[#f3f4f6] hover:text-neutral-800">9</button>
              <button className="px-3 py-1.5 rounded-md text-sm font-semibold text-neutral-800 transition-all duration-200 hover:bg-[#f3f4f6]">Next</button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default History