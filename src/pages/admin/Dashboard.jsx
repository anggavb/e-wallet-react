import { useState } from "react";
import { Link } from "react-router";
import { usePageTitle } from "@hooks";
import {
  Widget,
  TransactionHistory,
  FinancialChart,
} from "@components/molecules";
import {
  listWidget,
  listHistoryTransactions,
  dataFinancialChart,
} from "@utils";
import { MoneyInsertIcon, TransferIcon } from "@components/atoms/icons";

function Dashboard() {
  usePageTitle("Dashboard");
  const [chartType, setChartType] = useState("All");

  return (
    <>
      {/* Main Content */}
      <main className="flex flex-col gap-4 p-3 sm:p-6 sm:gap-6 md:p-8 xl:p-10 2xl:p-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {listWidget.map((widget) => (
            <Widget key={widget.name} widget={widget} />
          ))}
        </div>

        <section className="flex flex-col items-start gap-4 p-5 bg-white border border-gray-200 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <h3 className="text-lg font-semibold">Fast Service</h3>
          <div className="flex flex-col w-full gap-4 sm:flex-row sm:w-auto">
            <Link
              to="top-up"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-white transition-all bg-blue-600 rounded-lg sm:w-auto hover:bg-blue-700 font-medium"
            >
              <MoneyInsertIcon /> Top Up
            </Link>
            <Link
              to="transfer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-white transition-all bg-blue-600 rounded-lg sm:w-auto hover:bg-blue-700 font-medium"
            >
              <TransferIcon className="fill-white" /> Transfer
            </Link>
          </div>
        </section>

        <section className="grow">
          <div className="flex flex-col gap-4 p-4 bg-white border border-gray-200 sm:p-6">
            <div className="flex flex-col items-start gap-3 mb-8 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-semibold">{chartType} Chart</h3>
              <div className="flex gap-3">
                <select className="px-3 py-1.5 text-sm text-neutral-800 bg-gray-50 border border-gray-200 rounded-md outline-none cursor-pointer">
                  <option>7 Days</option>
                </select>
                <select
                  value={chartType}
                  onChange={(e) => setChartType(e.target.value)}
                  className="px-3 py-1.5 text-sm text-neutral-800 bg-gray-50 border border-gray-200 rounded-md outline-none cursor-pointer"
                >
                  <option value="All">All</option>
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
              </div>
            </div>

            <div className="relative flex h-50 gap-4 sm:h-75">
              <FinancialChart data={dataFinancialChart} chartType={chartType} />
            </div>
          </div>
        </section>
      </main>

      {/* Right Panel */}
      <aside className="px-4 pb-6 md:col-start-2 md:px-8 md:pb-8 lg:col-auto lg:p-8 lg:pl-0 xl:p-8 xl:pl-0">
        <div className="h-full p-4 bg-white border border-gray-200 sm:p-6">
          <div className="flex flex-col items-start gap-2 mb-6 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold">Transaction History</h3>
            <Link to="history" className="text-sm font-medium text-blue-600">
              See All
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            {listHistoryTransactions.map((transaction) => (
              <TransactionHistory
                key={transaction.name}
                transaction={transaction}
              />
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

export default Dashboard;
