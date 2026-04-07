import { usePageTitle } from "@hooks";
import { TransferIcon } from "@components/atoms/icons";
import { Link } from "react-router";

function Transfer() {
  const people = [
    { img: "11", name: "Ghaluh 1", phone: "(239) 555-0108" },
    { img: "12", name: "Ghaluh 2", phone: "(480) 555-0103" },
    { img: "13", name: "Ghaluh 3", phone: "(225) 555-0118" },
    { img: "14", name: "Ghaluh 4", phone: "(406) 555-0120" },
    { img: "15", name: "Ghaluh 5", phone: "(303) 555-0105" },
    { img: "16", name: "Ghaluh 6", phone: "(808) 555-0111" },
    { img: "17", name: "Ghaluh 7", phone: "(671) 555-0110" },
    { img: "18", name: "Ghaluh 8", phone: "(270) 555-0117" },
  ];
  usePageTitle("Transfer");
  return (
    <main className="md:col-span-1 lg:col-span-2 flex flex-col gap-4 p-3 sm:p-6 sm:gap-6 md:p-8 xl:p-10 2xl:p-12">
      <h2 className="flex items-center gap-3 text-base font-semibold text-blue-600 sm:text-lg">
        <TransferIcon className="fill-blue-600" />
        Transfer Money
      </h2>

      {/* Stepper */}
      <div className="flex flex-wrap items-center gap-4 mb-4 sm:mb-10 sm:flex-nowrap sm:gap-6">
        <div className="flex items-center gap-3 text-neutral-800 font-medium text-sm sm:text-base">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-600 text-white flex justify-center items-center text-xs sm:text-sm font-semibold">
            1
          </div>
          <span>Find People</span>
        </div>
        <div className="hidden grow-0 w-15 h-0 border-t-2 border-dashed border-gray-300 sm:block"></div>
        <div className="flex items-center gap-3 text-gray-500 font-medium text-sm sm:text-base">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-500 text-white flex justify-center items-center text-xs sm:text-sm font-semibold">
            2
          </div>
          <span>Set Nominal</span>
        </div>
        <div className="hidden grow-0 w-15 h-0 border-t-2 border-dashed border-gray-300 sm:block"></div>
        <div className="flex items-center gap-3 text-gray-500 font-medium text-sm sm:text-base">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-500 text-white flex justify-center items-center text-xs sm:text-sm font-semibold">
            3
          </div>
          <span>Finish</span>
        </div>
      </div>

      <section>
        <div className="p-4 bg-white border border-gray-200 rounded-xl sm:p-8">
          <div className="flex flex-col items-start gap-6 mb-8 sm:flex-row sm:justify-between sm:items-center">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800">
                Find People
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                8 Result Found For Ghaluh
              </p>
            </div>
            <div className="flex items-center border border-gray-200 rounded-lg px-4 py-2.5 w-full sm:w-62.5 md:w-75">
              <input
                type="text"
                placeholder="Enter Number Or Full Name"
                defaultValue=""
                className="grow border-none outline-none font-inherit text-sm"
              />
              <i className="ph ph-magnifying-glass text-lg text-gray-500"></i>
            </div>
          </div>

          <div className="flex flex-col">
            {people.map((person, index) => (
              <Link to="detail" key={index} className="block group">
                <div
                  className={`flex items-center px-3 py-3 gap-3 sm:px-4 sm:py-4 sm:gap-4 md:gap-8 transition-colors rounded-lg group-hover:bg-gray-50 ${index % 2 !== 0 ? "bg-gray-50" : ""}`}
                >
                  <img
                    src={`https://i.pravatar.cc/150?img=${person.img}`}
                    alt="User"
                    className="object-cover rounded-lg w-9 h-9 sm:w-11 sm:h-11"
                  />
                  <span className="flex-1 font-medium text-gray-500">
                    {person.name}
                  </span>
                  <span className="hidden flex-1 text-center text-gray-500 text-base sm:block">
                    {person.phone}
                  </span>
                  <i className="ph ph-star text-2xl text-gray-500 cursor-pointer transition-colors duration-200 hover:text-blue-600"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Transfer;
