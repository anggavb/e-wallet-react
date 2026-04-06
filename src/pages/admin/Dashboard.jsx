import { usePageTitle } from "@hooks"
import { BalanceIcon, IncomeIcon, ExpenseIcon, StonkIcon, DownStonkIcon } from '@components/atoms/icons';
import { Widget } from '@components/molecules';
import { listWidget } from '@utils';

function Dashboard() {
  usePageTitle("Dashboard")
  return (
    <>
      {/* Main Content */}
        <main className="flex flex-col gap-4 p-3 sm:p-6 sm:gap-6 md:p-8 xl:p-10 2xl:p-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
              listWidget.map((widget) => (
                <Widget key={widget.name} widget={widget} />
              ))
            }
          </div>

          <section>
            <div className="flex flex-col items-start gap-4 p-5 bg-white border border-gray-200 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <h3 className="text-lg font-semibold">Fast Service</h3>
              <div className="flex flex-col w-full gap-4 sm:flex-row sm:w-auto">
                <a className="inline-flex items-center justify-center gap-2 px-8 py-3 text-white transition-all bg-blue-600 rounded-lg sm:w-auto hover:bg-blue-700 font-medium" href="./top-up.html">
                  <img src="/assets/icons/u_money-insert.svg" alt="" /> Top Up
                </a>
                <a className="inline-flex items-center justify-center gap-2 px-8 py-3 text-white transition-all bg-blue-600 rounded-lg sm:w-auto hover:bg-blue-700 font-medium" href="./transfer.html">
                  <img src="/assets/icons/send-white.svg" alt="" /> Transfer
                </a>
              </div>
            </div>
          </section>

          <section className="grow">
            <div className="flex flex-col gap-4 p-4 bg-white border border-gray-200 sm:p-6">
              <div className="flex flex-col items-start gap-3 mb-8 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold">Income Chart</h3>
                <div className="flex gap-3">
                  <select className="px-3 py-1.5 text-sm text-neutral-800 bg-gray-50 border border-gray-200 rounded-md outline-none cursor-pointer">
                    <option>7 Days</option>
                  </select>
                  <select className="px-3 py-1.5 text-sm text-neutral-800 bg-gray-50 border border-gray-200 rounded-md outline-none cursor-pointer">
                    <option>Income</option>
                  </select>
                </div>
              </div>
              
              <div className="relative flex h-50 gap-4 sm:h-75">
                <img src="/assets/images/Chart.png" alt="Income Chart" className="object-cover w-full h-full" />
              </div>
            </div>
          </section>

        </main>

        {/* Right Panel */}
        <aside className="px-4 pb-6 md:col-start-2 md:px-8 md:pb-8 lg:col-auto lg:p-8 lg:pl-0 xl:p-8 xl:pl-0">
          <div className="h-full p-4 bg-white border border-gray-200 sm:p-6">
            <div className="flex flex-col items-start gap-2 mb-6 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-semibold">Transaction History</h3>
              <a href="./history.html" className="text-sm font-medium text-blue-600">See All</a>
            </div>
            
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/robert-fox.png" alt="Robert Fox" className="w-10 h-10 object-cover rounded-xl" />
                <div className="grow">
                  <h4 className="text-base font-semibold text-neutral-800">Robert Fox</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Transfer</p>
                </div>
                <div className="text-sm font-semibold text-emerald-600">+Rp50.000</div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/floyd-miles.png" alt="Floyd Miles" className="w-10 h-10 object-cover rounded-xl" />
                <div className="grow">
                  <h4 className="text-base font-semibold text-neutral-800">Floyd Miles</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Send</p>
                </div>
                <div className="text-sm font-semibold text-red-600">-Rp50.000</div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/ujang.png" alt="Ujang" className="w-10 h-10 object-cover rounded-xl" />
                <div className="grow">
                  <h4 className="text-base font-semibold text-neutral-800">Ujang</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Send</p>
                </div>
                <div className="text-sm font-semibold text-red-600">-Rp50.000</div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/raulemons.png" alt="Raulemons" className="w-10 h-10 object-cover rounded-xl" />
                <div className="grow">
                  <h4 className="text-base font-semibold text-neutral-800">Raulemons</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Transfer</p>
                </div>
                <div className="text-sm font-semibold text-emerald-600">+Rp50.000</div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/reiva.png" alt="Reiva" className="w-10 h-10 object-cover rounded-xl" />
                <div className="grow">
                  <h4 className="text-base font-semibold text-neutral-800">Reiva</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Transfer</p>
                </div>
                <div className="text-sm font-semibold text-emerald-600">+Rp50.000</div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/thobie.png" alt="Thobie" className="w-10 h-10 object-cover rounded-xl" />
                <div className="grow">
                  <h4 className="text-base font-semibold text-neutral-800">Thobie</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Send</p>
                </div>
                <div className="text-sm font-semibold text-red-600">-Rp50.000</div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/buzjany.png" alt="Buzjany" className="w-10 h-10 object-cover rounded-xl" />
                <div className="grow">
                  <h4 className="text-base font-semibold text-neutral-800">Buzjany</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Transfer</p>
                </div>
                <div className="text-sm font-semibold text-emerald-600">+Rp50.000</div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/adisurya.png" alt="Adisurya" className="w-10 h-10 object-cover rounded-xl" />
                <div className="grow">
                  <h4 className="text-base font-semibold text-neutral-800">Adisurya</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Send</p>
                </div>
                <div className="text-sm font-semibold text-red-600">-Rp50.000</div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/assets/images/dashboard/miguelle.png" alt="Miguelle" className="w-10 h-10 object-cover rounded-xl" />
                <div className="grow">
                  <h4 className="text-base font-semibold text-neutral-800">Miguelle</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Transfer</p>
                </div>
                <div className="text-sm font-semibold text-emerald-600">+Rp50.000</div>
              </div>
            </div>
          </div>
        </aside>
    </>
  )
}

export default Dashboard