import { Button } from "@components/atoms";
import { PinInput } from "@components/molecules";
import { ProfileIcon } from "@components/atoms/icons";
import { usePageTitle } from "@hooks";

function ProfileChangePin() {
  usePageTitle("Change Pin");
  return (
    <main className="page-main md:col-span-1 lg:col-span-2">
      <div className="mb-4 page-header">
        <h2 className="flex items-center gap-2 text-base font-semibold text-blue-700 sm:text-[1.2rem] sm:gap-3">
          <ProfileIcon className="stroke-gray-600" />
          Profile
        </h2>
      </div>

      <section>
        <div className="text-center justify-center p-4 bg-gray-50 border border-neutral-200 sm:p-6 lg:p-8 shadow-sm">
          <div className="mb-2">
            <h1 className="text-[1.3rem] sm:text-[1.5rem] lg:text-[1.8rem] font-bold leading-snug text-neutral-800 mb-1">
              Change Pin 👋
            </h1>
            <p className="text-[0.9rem] sm:text-[0.95rem] leading-relaxed text-gray-500">
              Please save your pin because this so important.
            </p>
          </div>

          <form action="#" method="POST">
            <PinInput length={6} />

            <Button type="submit" className="w-full p-4">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ProfileChangePin;
