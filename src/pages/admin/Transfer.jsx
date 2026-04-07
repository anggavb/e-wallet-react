import { usePageTitle } from "@hooks";
import { TransferIcon } from "@components/atoms/icons";
import { PageHeader, SearchBox, Stepper } from "@components/molecules";
import { Link } from "react-router";

const TRANSFER_STEPS = ["Find People", "Set Nominal", "Finish"];

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

function Transfer() {
  usePageTitle("Transfer");
  return (
    <main className="page-main md:col-span-1 lg:col-span-2">
      <PageHeader icon={<TransferIcon className="fill-blue-600" />} title="Transfer Money" />

      <Stepper steps={TRANSFER_STEPS} activeStep={0} />

      <section>
        <div className="p-4 bg-white border border-gray-200 rounded-xl sm:p-8">
          <div className="flex flex-col items-start gap-6 mb-8 sm:flex-row sm:justify-between sm:items-center">
            <div>
              <h3 className="text-lg font-semibold text-neutral-800">Find People</h3>
              <p className="text-sm text-gray-500 mt-1">8 Result Found For Ghaluh</p>
            </div>
            <SearchBox
              placeholder="Enter Number Or Full Name"
              className="w-full sm:w-62.5 md:w-75"
            />
          </div>

          <div className="flex flex-col">
            {people.map((person, index) => (
              <Link to="detail" key={index} className="block group">
                <div className={`flex items-center px-3 py-3 gap-3 sm:px-4 sm:py-4 sm:gap-4 md:gap-8 transition-colors rounded-lg group-hover:bg-gray-50 ${index % 2 !== 0 ? "bg-gray-50" : ""}`}>
                  <img
                    src={`https://i.pravatar.cc/150?img=${person.img}`}
                    alt="User"
                    className="object-cover rounded-lg w-9 h-9 sm:w-11 sm:h-11"
                  />
                  <span className="flex-1 font-medium text-gray-500">{person.name}</span>
                  <span className="hidden flex-1 text-center text-gray-500 text-base sm:block">{person.phone}</span>
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
