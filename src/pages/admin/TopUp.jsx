import { TopUpIcon } from '@components/atoms/icons';
import { RadioMenu } from '@components/molecules';
import { usePageTitle } from '@hooks';
import { listPaymentMethod } from '@utils';

function TopUp() {
  usePageTitle("Top Up")
  return (
    <main className="md:col-span-1 lg:col-span-2 flex flex-col gap-4 p-3 sm:p-6 sm:gap-6 md:p-8 xl:p-10 2xl:p-12">
          
      <div className="mb-4 page-header sm:mb-6">
        <h2 className="flex items-center gap-2 text-base font-semibold text-blue-600 sm:text-lg sm:gap-3">
          <TopUpIcon className="fill-blue-600" /> Top Up Account
        </h2>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8 xl:gap-10">
        
        {/* Top-Up Form (Left Column) */}
        <div className="flex flex-col flex-1 min-w-0 gap-5 p-4 bg-white border border-gray-200 rounded-xl sm:p-6 sm:gap-6 lg:gap-8">
          
          <div className="flex flex-col gap-2">
            <label className="text-base font-semibold text-neutral-800">Account Information</label>
            <div className="flex items-center gap-4 px-4 py-3.5 bg-gray-50 rounded-lg sm:px-5 sm:py-4">
              <img src="https://i.pravatar.cc/150?img=11" alt="Ghaluh Wizard" className="object-cover shrink-0 w-12 h-12 rounded-xl sm:w-14 sm:h-14" />
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-semibold text-neutral-800 sm:text-base">Ghaluh Wizard</h4>
                <p className="text-sm text-gray-500 sm:text-[0.85rem]">(239) 555-0108</p>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 mt-1 text-xs font-semibold text-emerald-600 bg-emerald-600/10 border border-emerald-600/25 rounded-full w-fit">
                  <i className="ph-fill ph-check-circle"></i> Verified
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base font-semibold text-neutral-800">Amount</label>
            <p className="text-sm text-gray-500 mt-0.5 mb-2">Type the amount you want to transfer to your e-wallet account</p>
            <div className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg transition-colors focus-within:border-blue-600 focus-within:shadow-blue-600/10 sm:px-5 sm:py-3.5">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" className="shrink-0 text-gray-500">
                <path d="M6.62076 12.1379C6.40252 12.1379 6.18918 12.2026 6.00771 12.3239C5.82625 12.4451 5.68482 12.6174 5.6013 12.8191C5.51779 13.0207 5.49593 13.2426 5.53851 13.4566C5.58109 13.6707 5.68618 13.8673 5.8405 14.0216C5.99482 14.1759 6.19144 14.281 6.40549 14.3236C6.61953 14.3662 6.8414 14.3443 7.04303 14.2608C7.24466 14.1773 7.41699 14.0359 7.53824 13.8544C7.65949 13.6729 7.72421 13.4596 7.72421 13.2413C7.72421 12.9487 7.60795 12.668 7.40101 12.4611C7.19408 12.2542 6.91341 12.1379 6.62076 12.1379ZM19.8621 12.1379C19.6439 12.1379 19.4306 12.2026 19.2491 12.3239C19.0676 12.4451 18.9262 12.6174 18.8427 12.8191C18.7592 13.0207 18.7373 13.2426 18.7799 13.4566C18.8225 13.6707 18.9276 13.8673 19.0819 14.0216C19.2362 14.1759 19.4328 14.281 19.6469 14.3236C19.8609 14.3662 20.0828 14.3443 20.2844 14.2608C20.486 14.1773 20.6584 14.0359 20.7796 13.8544C20.9009 13.6729 20.9656 13.4596 20.9656 13.2413C20.9656 12.9487 20.8493 12.668 20.6424 12.4611C20.4355 12.2542 20.1548 12.1379 19.8621 12.1379ZM22.069 5.51721H4.41386C3.5359 5.51721 2.6939 5.86598 2.07309 6.48679C1.45228 7.1076 1.10352 7.9496 1.10352 8.82756V17.6551C1.10352 18.5331 1.45228 19.3751 2.07309 19.9959C2.6939 20.6167 3.5359 20.9655 4.41386 20.9655H22.069C22.947 20.9655 23.789 20.6167 24.4098 19.9959C25.0306 19.3751 25.3794 18.5331 25.3794 17.6551V8.82756C25.3794 7.9496 25.0306 7.1076 24.4098 6.48679C23.789 5.86598 22.947 5.51721 22.069 5.51721ZM23.1725 17.6551C23.1725 17.9478 23.0562 18.2285 22.8493 18.4354C22.6424 18.6423 22.3617 18.7586 22.069 18.7586H4.41386C4.12121 18.7586 3.84054 18.6423 3.6336 18.4354C3.42667 18.2285 3.31041 17.9478 3.31041 17.6551V8.82756C3.31041 8.5349 3.42667 8.25424 3.6336 8.0473C3.84054 7.84036 4.12121 7.72411 4.41386 7.72411H22.069C22.3617 7.72411 22.6424 7.84036 22.8493 8.0473C23.0562 8.25424 23.1725 8.5349 23.1725 8.82756V17.6551ZM13.2414 9.93101C12.5867 9.93101 11.9467 10.1252 11.4023 10.4889C10.8579 10.8526 10.4336 11.3696 10.1831 11.9745C9.93254 12.5794 9.86698 13.245 9.99471 13.8872C10.1224 14.5293 10.4377 15.1192 10.9007 15.5821C11.3636 16.0451 11.9535 16.3604 12.5956 16.4881C13.2378 16.6158 13.9034 16.5503 14.5083 16.2997C15.1131 16.0492 15.6302 15.6249 15.9939 15.0805C16.3576 14.5361 16.5518 13.8961 16.5518 13.2413C16.5518 12.3634 16.203 11.5214 15.5822 10.9006C14.9614 10.2798 14.1194 9.93101 13.2414 9.93101ZM13.2414 14.3448C13.0232 14.3448 12.8099 14.2801 12.6284 14.1588C12.4469 14.0376 12.3055 13.8653 12.222 13.6636C12.1385 13.462 12.1166 13.2401 12.1592 13.0261C12.2018 12.812 12.3069 12.6154 12.4612 12.4611C12.6155 12.3068 12.8121 12.2017 13.0262 12.1591C13.2402 12.1165 13.4621 12.1384 13.6637 12.2219C13.8653 12.3054 14.0377 12.4468 14.1589 12.6283C14.2802 12.8098 14.3449 13.0231 14.3449 13.2413C14.3449 13.534 14.2286 13.8147 14.0217 14.0216C13.8148 14.2285 13.5341 14.3448 13.2414 14.3448Z" fill="currentColor"/>
              </svg>
              <input type="text" placeholder="Enter Nominal Transfer" className="grow min-w-0 text-[0.9rem] font-inherit text-neutral-800 bg-transparent border-none outline-none placeholder-gray-500" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base font-semibold text-neutral-800">Payment Method</label>
            <p className="text-sm text-gray-500 mt-0.5 mb-2">Choose your payment method for top up account</p>
            
            <div className="flex flex-col gap-3">
              {listPaymentMethod.map((method, idx) => (
                <RadioMenu key={idx} paymentMethod={method} isDefault={idx === 0} />
              ))}
            </div>
          </div>
        </div>

        {/* Summary Card (Right Column) */}
        <aside className="w-full shrink-0 lg:w-[320px] xl:w-87.5 2xl:w-95">
          <div className="flex flex-col gap-0 p-5 bg-white border border-gray-200 rounded-xl sm:p-6 lg:p-7 xl:p-8 lg:sticky lg:top-23.5">
            <h3 className="mb-5 text-base font-bold text-neutral-800 sm:text-lg">Payment</h3>
            
            <div className="flex items-center justify-between mb-3.5 text-sm sm:text-base 2xl:text-base">
              <span className="font-normal text-neutral-800">Order</span>
              <span className="font-semibold text-neutral-800">Idr. 40.000</span>
            </div>
            <div className="flex items-center justify-between mb-3.5 text-sm sm:text-base 2xl:text-base">
              <span className="font-normal text-neutral-800">Delivery</span>
              <span className="font-semibold text-neutral-800">Idr. 0</span>
            </div>
            <div className="flex items-center justify-between mb-3.5 text-sm sm:text-base 2xl:text-base">
              <span className="font-normal text-neutral-800">Tax</span>
              <span className="font-semibold text-neutral-800">Idr. 4000</span>
            </div>
            
            <div className="h-px bg-gray-200 my-4 sm:my-5"></div>
            
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-[0.9rem] font-semibold text-neutral-800">Sub Total</span>
              <span className="text-base font-bold text-neutral-800 sm:text-lg">Idr.44.000</span>
            </div>

            <button className="inline-flex items-center justify-center w-full px-6 py-3 mt-5 font-semibold font-inherit text-[0.9rem] text-white transition-all duration-200 bg-blue-600 border-none rounded-lg cursor-pointer hover:bg-[#2a44cc] hover:shadow-[0_4px_12px_rgba(41,72,255,0.3)] active:scale-95">
              Submit
            </button>
            
            <p className="mt-3 text-xs leading-relaxed text-gray-500">
              *Get Discount if you pay with Bank Central Asia
            </p>
          </div>
        </aside>

      </div>

    </main>
  )
}

export default TopUp